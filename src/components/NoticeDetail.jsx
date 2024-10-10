import { useLocation } from "react-router-dom";

function NoticeDetail() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const sub = searchParams.get('sub');

    const noticeDetails = {
        1: {
            title: '국제교육교류협회 2024년 행사 안내',
            date: '2024-01-10',
            content: '2024년에는 국제교육교류협회에서 여러 행사가 예정되어 있습니다...',
        },
        2: {
            title: '2023년도 교육 프로그램 결과 발표',
            date: '2023-12-18',
            content: '2023년도 교육 프로그램의 결과가 발표되었습니다...',
        },
        // 추가 가상의 뉴스 기사들...
    };

    const notice = noticeDetails[id];

    if (!notice) {
        return <div>공지사항을 찾을 수 없습니다.</div>;
    }

    return (
        <div style={{ padding: "20px", width: "100%", margin: "0 auto" }}>
            <h2>{notice.title}</h2>
            <p><strong>작성일:</strong> {notice.date}</p>
            <p>{notice.content}</p>
        </div>
    );
}

export default NoticeDetail;