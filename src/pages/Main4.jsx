import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Main4() {
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const subContents = ["공지사항", "보도자료"];
    const routerPush = useNavigate();
    const notices = [
        { id: 1, title: '국제교육교류협회 2024년 행사 안내', date: '2024-01-10' },
        { id: 2, title: '2023년도 교육 프로그램 결과 발표', date: '2023-12-18' },
        { id: 3, title: '해외 대학 협력 관련 업데이트', date: '2023-11-22' },
        { id: 4, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 5, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 6, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 7, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 8, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 9, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 10, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
        { id: 11, title: '신규 교육 과정 등록 안내', date: '2023-10-14' },
    ];

    // 페이지네이션 관련 상태
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // 현재 페이지에 해당하는 공지사항만 가져오기
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNotices = notices.slice(indexOfFirstItem, indexOfLastItem);

    // 페이지 번호 목록
    const totalPages = Math.ceil(notices.length / itemsPerPage);

    // 페이지 변경 핸들러
    const handlePageChange = (pageNumber) => {
        if (pageNumber > 0 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };
    // 공지사항 클릭 시 디테일 페이지로 이동
    const handleItemClick = (id) => {
        routerPush(`/noticedetail?sub=${sub}&id=${id}`);
    };
    // 가상의 보도자료 데이터 (썸네일, 제목)
    const pressReleases = [
        { id: 1, title: '국제교육교류협회, 2024년 글로벌 교육 협력 방안 발표', thumbnail: '/images/그림1.png' },
        { id: 2, title: '2023 국제 교육 포럼 성황리에 종료', thumbnail: '/images/그림1.png' },
        { id: 3, title: 'IEEA, 해외 명문대와의 협력 강화', thumbnail: '/images/그림1.png' },
        // 추가 뉴스 항목들...
    ];
    // 스타일 정의
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
    };

    const gridItemStyle = {
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '10px',
        backgroundColor: '#fff',
        transition: 'transform 0.2s',
    };

    const thumbnailStyle = {
        width: '100%',
        height: '150px',
        objectFit: 'cover',
        borderBottom: '1px solid #ddd',
    };

    const titleStyle = {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: 'bold',
    };

    return (
        <div className="w-full flexColumn">
            <div className={"h60"} />
            <div className={"relative"}>
                <img
                    src={"/images/그림1.png"}
                    className={"w-full round-20"}
                    style={{ maxHeight: "500px" }}
                />
                <div className={"TitleS11 absolute White"} style={{ left: "40px", top: "80%" }}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"} />
            {
             sub === "0" ?
                 <div style={{ padding: "20px", width: "100%", margin: "0 auto" }}>
                     <h2>공지사항</h2>
                     <div className={"w-full"}>
                         {currentNotices.map((item, idx) => (
                             <div
                                 key={idx}
                                 style={{
                                     display: "flex",
                                     justifyContent: "space-between",
                                     padding: "10px 0",
                                     borderBottom: "1px solid #ddd",
                                     cursor: "pointer",  // 클릭 가능한 요소로 변경
                                 }}
                                 onClick={() => handleItemClick(item.id, 1)}
                             >
                                 <span>{item.title}</span>
                                 <span>{item.date}</span>
                             </div>
                         ))}

                         {/* 페이지네이션 */}
                         <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                             {/* 왼쪽 화살표 */}
                             <button
                                 onClick={() => handlePageChange(currentPage - 1)}
                                 style={paginationButtonStyle}
                                 disabled={currentPage === 1}
                             >
                                 &lt;
                             </button>

                             {/* 페이지 번호 */}
                             {[...Array(totalPages)].map((_, i) => (
                                 <button
                                     key={i}
                                     onClick={() => handlePageChange(i + 1)}
                                     style={{
                                         ...paginationButtonStyle,
                                         backgroundColor: currentPage === i + 1 ? "#007BFF" : "white",
                                         color: currentPage === i + 1 ? "white" : "#000",
                                     }}
                                 >
                                     {i + 1}
                                 </button>
                             ))}

                             {/* 오른쪽 화살표 */}
                             <button
                                 onClick={() => handlePageChange(currentPage + 1)}
                                 style={paginationButtonStyle}
                                 disabled={currentPage === totalPages}
                             >
                                 &gt;
                             </button>
                         </div>
                     </div>
                 </div>
                 :
                 <div className="w-full flexColumn" style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                     <h2>보도자료</h2>
                     <div className="grid-container" style={gridContainerStyle}>
                         {pressReleases.map((item, idx) => (
                             <div
                                 key={idx}
                                 className="grid-item"
                                 style={gridItemStyle}
                                 onClick={() => handleItemClick(item.id, 2)}
                             >
                                 <img src={item.thumbnail} alt={item.title} style={thumbnailStyle} />
                                 <div style={titleStyle}>{item.title}</div>
                             </div>
                         ))}
                     </div>
                 </div>
            }
        </div>
    );
}

// 스타일 정의
const paginationButtonStyle = {
    padding: "8px 16px",
    margin: "0 5px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
};

export default Main4;