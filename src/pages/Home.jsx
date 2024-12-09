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




    const alertItems = [
        {
            title: "[공사수주] 인창고 급식소 및 체육관 증축공사",
            date: "2024-06-18",
        },
        {
            title: "[송년사] 2023년도 나기선 회장님 송년사",
            date: "2023-12-29",
        },
        {
            title: "[공사수주] 수인산업도로~의왕자 수지간 도로개설공사",
            date: "2023-12-28",
        },
        {
            title: "공지사항 공지사항~의왕자 수지간 도로개설공사",
            date: "2023-12-28",
        },
        {
            title: "[공사수주] 공지사항~의왕자 수지간 도로개설공사",
            date: "2023-12-28",
        },
    ];


    const newsItems = [
        {
            title: "[공사수주] 인창고 급식소 및 체육관 증축공사",
            date: "2024-06-18",
        },
        {
            title: "2020년 중국 교류 보도",
            date: "2020-12-29",
        },
        {
            title: "[송년사] 2023년도 나기선 회장님 송년사",
            date: "2023-12-29",
        }
    ];


    const mainItems = ["국제전략포럼","데이터경제포럼", "교육문화교류플랫폼"]
    const [activeCategory, setActiveCategory] = useState('전체');
    const routerPush = useNavigate();

    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={"/images/home_1.jpg"} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    <div className={"TitleS22"}>한국국제교육교류우호협회</div>
                    <div className={"h10"}/>
                    <div className={"Body1S16"}>
                        국제적인 문화 교류와 협력을 통해
                        학생들이 글로벌 인재로 성장하고
                        밝은 미래를 향해 나아갈 수 있도록 지원합니다.
                    </div>
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
                            src={`/images/example.jpg`}
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
            <div className={"w-full flexAlign"}>
                <div className={width < 678 ? "flexColumn" : "flexRow"}>

                    <div className={"flexColumn"} style={{width:width < 678 ? "100%" : "50%", maxWidth:"600px"}}>
                        <div className={"flexRow flexAlign-between"}>
                            <div className={width < 678 ? "ft-20-600" : "ft-32-600"}>
                                공지사항
                            </div>
                            <div
                                className={"cursor flexRow flexAlign-column round-8"}
                                style={{padding:"4px", border:"1px solid #939393"}}
                                onClick={()=>{
                                    alert("hi")
                                }}
                            >
                                <div className={"Body2M16 GR600_93"}>바로가기</div>
                                <div className={"w4"}/>
                                <img src={"/icons/enter-icon.svg"}/>
                            </div>

                        </div>

                        <div className={"h20"}/>
                        <div className={"flexColumn"}>
                            {alertItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '20px',
                                        textAlign: 'left',
                                        borderBottom:alertItems.length -1 === idx ? "" : "1px solid #d9d9d9"
                                    }}
                                    className={"cursor"}
                                    onClick={()=>{
                                        alert("이동")
                                    }}
                                >
                                    <div className={"Title2B20 GR800_3D"}>{item.title}</div>
                                    <div className={"h8"}/>
                                    <div className={"GR600_93"}>{item.date}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={width < 678 ? "h40" : "w40"}/>

                    <div className={"flexColumn"} style={{width:width < 678 ? "100%" : "50%", maxWidth:"600px"}}>
                        <div className={"flexRow flexAlign-between"}>
                            <div className={width < 678 ? "ft-20-600" : "ft-32-600"}>
                                보도자료
                            </div>
                            <div
                                className={"cursor flexRow flexAlign-column round-8"}
                                style={{padding:"4px", border:"1px solid #939393"}}
                                onClick={()=>{
                                    alert("hi")
                                }}
                            >
                                <div className={"Body2M16 GR600_93"}>바로가기</div>
                                <div className={"w4"}/>
                                <img src={"/icons/enter-icon.svg"}/>
                            </div>

                        </div>

                        <div className={"h20"}/>
                        <div className={"flexColumn"}>
                            {newsItems.map((item, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        padding: '20px',
                                        textAlign: 'left',
                                        borderBottom:newsItems.length -1 === idx ? "" : "1px solid #d9d9d9"
                                    }}
                                    className={"cursor flexRow"}
                                    onClick={()=>{
                                        alert("이동")
                                    }}
                                >
                                    <img src={"/images/example.jpg"} className={"w200 h100"}/>
                                    <div className={"w20"}/>
                                    <div className={"flexColumn w-full flexAlign"}>
                                        <div className={"Title3S18 GR800_3D textAlign-center"}>{item.title}</div>
                                        <div className={"h8"}/>
                                        <div className={"GR600_93"}>{item.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={"h40"}/>


        </div>
    );
}

export default Home;
