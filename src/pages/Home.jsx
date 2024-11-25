import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import {useNavigate} from "react-router-dom";


function Home() {
    const [user,setUser]= useRecoilState(userInfo)
    const width = useWindowWidth();


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


    const mainItems = ["국제전략포럼","데이터경제포럼", "교육문화교류플랫폼"]
    const [activeCategory, setActiveCategory] = useState('전체');
    const routerPush = useNavigate();

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
            <div className={width < 678 ? "ft-20-600" : "ft-32-600"}>
                협회 사업
            </div>
            <div className={"h20"}/>

            <div className={width < 678 ? "flexColumn w-full" : "flexRow w-full"}>
                {mainItems.map((item, index) => (
                    <div
                        key={index}
                        className={"relative"}
                        style={{ flex: `${flexValues[index]} 1 0%`, marginRight:width < 678 ? "0px" : index !== 2 ? "20px" : "0px", marginBottom:"20px"}}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={`/images/그림1.png`}
                            style={{width:"100%", height:"400px"}}
                            className="round-20"
                        />
                        <div className={"absolute ft-24-700 White"} style={{top:"20px", left:"20px"}}>
                            {item}
                        </div>
                        <div
                            className={"absolute ft-12-400 White cursor"}
                            style={{bottom:"10px", right:"10px", border:"1px solid #fff", padding:"4px 8px"}}
                            onClick={()=>{
                                routerPush(`/main2?sub=${index}`)
                            }}
                        >
                            바로가기
                        </div>
                    </div>
                ))}
            </div>

            <div className={"h40"}/>
            <div className={width < 678 ? "ft-20-600" : "ft-32-600"}>
                공지사항
            </div>
            <div className={"h20"}/>
            <div className={"flexRow"} style={{overflowX:"scroll"}}>
                {newsItems.concat(newsItems).concat(newsItems).concat(newsItems).map((news) => (
                    <div
                        key={news.id}
                        style={{
                            backgroundColor: '#ffffff',
                            minWidth: '400px',
                            marginRight:"20px",
                            borderRadius: '20px',
                            padding: '20px',
                            textAlign: 'left',
                            border:"1px solid #d9d9d9"
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

            <div className={"h20"}/>  <div className={"h20"}/>
            <div className={width < 678 ? "ft-20-600" : "ft-32-600"}>
                보도자료
            </div>
            <div className={"h20"}/>
            <div className={"flexRow"} style={{overflowX:"scroll"}}>
                {newsItems.concat(newsItems).concat(newsItems).concat(newsItems).map((news) => (
                    <div
                        key={news.id}
                        style={{
                            backgroundColor: '#ffffff',
                            minWidth: '400px',
                            marginRight:"20px",
                            borderRadius: '20px',
                            padding: '20px',
                            textAlign: 'left',
                            border:"1px solid #d9d9d9"
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
            <div className={"h40"}/>


        </div>
    );
}

export default Home;
