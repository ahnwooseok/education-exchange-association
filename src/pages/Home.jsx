import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";



function Home() {
    const [user,setUser]= useRecoilState(userInfo)



    const [flexValues, setFlexValues] = useState([1, 1, 1]);  // 기본 값은 모두 1

    const handleMouseEnter = (index) => {
        // 마우스가 올려진 요소의 flex 값을 3으로 변경
        const newFlexValues = [...flexValues];
        newFlexValues[index] = 3;
        setFlexValues(newFlexValues);
    };

    const handleMouseLeave = () => {
        // 모든 요소의 flex 값을 1로 되돌림
        setFlexValues([1, 1, 1]);
    };


    const categories = ['공지사항', '보도자료'];

    const newsItems = [
        {
            id: 1,
            title: "[공사수주] 인창고 급식소 및 체육관 증축공사",
            description: "당사는 경기도교육청 구리남양주교육지원청에서 발주한 인창고 급식소 및 체육관 증축공사를 수주하였습니다. 본 공사는 경기도 구리시 양숙천로 33 90에 위치",
            date: "2024-06-18",
        },
        {
            id: 2,
            title: "[송년사] 2023년도 나기선 회장님 송년사",
            description: "2023 고덕 송년사 다사다난했던 계묘년 한해가 저물어 가고 있습니다. 2023년은 개인적으로도 비쁜 한 해였습니다.",
            date: "2023-12-29",
        },
        {
            id: 3,
            title: "[공사수주] 수인산업도로~의왕자 수지간 도로개설공사",
            description: "당사는 경기도 수원시에서 발주한 수인산업도로와 왕자수지간 도로개설공사를 수주하였습니다.",
            date: "2023-12-28",
        },
    ];
    const [activeCategory, setActiveCategory] = useState('전체');

    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={"/images/그림1.png"} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    교육교류협회 메인
                </div>
            </div>
            <div className={"h40"}/>
            <div className={"TitleS22"}>
                OUR BUSINESS
            </div>
            <div className={"h20"}/>

            <div className="flexRow w-full">
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className={"relative"}
                        style={{ flex: `${flexValues[index]} 1 0%`, marginRight:index !== 2 ? "20px" : "0px"}}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            // src={`/images/그림${index + 1}.jpg`}
                            src={`/images/그림1.png`}
                            style={{width:"100%"}}
                            className="round-20"
                            alt={`business-${index}`}
                        />
                        <div className={"absolute Body1S16 White"} style={{bottom:"10px", left:"10px"}}>
                            메인사업 {index+1}
                        </div>
                    </div>
                ))}
            </div>

            <div className={"h40"}/>
            <div className={"TitleS22"}>
                NEWSROOM
            </div>
            <div className={"h20"}/>
            <div style={{ padding: '20px', backgroundColor: '#b87333' }}>
                {/* 카테고리 탭 */}
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            style={{
                                backgroundColor: activeCategory === category ? 'white' : 'transparent',
                                border: activeCategory === category ? '2px solid red' : 'none',
                                padding: '10px 20px',
                                marginRight: '10px',
                                fontSize: '16px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                            }}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* 뉴스 카드 섹션 */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {newsItems.map((news) => (
                        <div
                            key={news.id}
                            style={{
                                backgroundColor: '#ffffff',
                                width: '30%',
                                borderRadius: '20px',
                                padding: '20px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                textAlign: 'left',
                            }}
                        >
                            <div>
                                <span style={{ fontWeight: 'bold' }}>뉴스</span>
                                <h3>{news.title}</h3>
                                <p>{news.description}</p>
                                <p style={{ color: '#999', marginTop: '10px' }}>{news.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 더보기 버튼 */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                    <button
                        style={{
                            backgroundColor: 'white',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            border: '1px solid #333',
                        }}
                    >
                        더 보러가기
                    </button>
                </div>
            </div>

            <div className={"h40"}/>


        </div>
    );
}

export default Home;
