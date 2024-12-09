import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth.jsx";



function Main1() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const width = useWindowWidth();
    const sub = searchParams.get('sub');
    const subContents = ["인사말", "설립목적", "조직/조직도", "협회연혁", "오시는길"]
    const blockStyle = (backgroundColor) => ({
        backgroundColor: backgroundColor,
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '30%',
        textAlign: 'center',
        marginBottom: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    });
    // 연도별 섹션 스타일
    const yearBlockStyle = {
        marginBottom: '20px',
    };

// 구분선 스타일
    const dividerStyle = {
        width: '100%',
        height: '2px',
        backgroundColor: '#ccc',
        margin: '20px 0',
    };
    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={`/images/main1sub${sub}.png`} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={width<678 ? "Title1B24 absolute White" : "TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"}/>
            {sub === "0" ?
                <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                    {/*width*/}
                    <div className={width < 678 ? "flexColumn" : "flexRow flexAlign-start"}>
                        <div className={"flexColumn flexAlign"}>
                            <img
                                src={"/images/main1sub0_1.jpeg"}
                                alt="강준영 교수님 이미지"
                                style={{ width:width < 678 ? '150px' : "200px", borderRadius: '8px' }}
                            />
                            <div className={width < 678 ? "flexColumn textAlign-center" : "flexColumn textAlign-left"}>
                                <div className={"h8"}/>
                                <div className={"ft-16-600 textAlign-center"}>
                                    <span>사단법인 국제교육교류우호협회</span><br/>
                                    <span className={"ft-16-700"}>이사장 강준영</span>
                                </div>
                                <div className={"h8"}/>
                                <div className={"flexColumn"}>
                                    <div className={"flexRow ft-14-700"}>주요 약력</div>
                                    <div className={"h8"}/>
                                    <div className={width < 678 ? "flexRow" : "flexColumn"}>
                                        <div className={"ft-14-600 w80"}>2020.01~</div>
                                        <div className={"w4"}/>
                                        <div className={"ft-14-600 textAlign-left"}>
                                            한국국제정치학회 부회장
                                        </div>
                                    </div>
                                    <div className={"h8"}/>
                                    <div className={width < 678 ? "flexRow" : "flexColumn"}>
                                        <div className={"ft-14-600 w80"}>2019.01 ~</div>
                                        <div className={"w4"}/>
                                        <div className={"ft-14-600 textAlign-left"}>
                                            한국외국어대학교 국제지역연구센터장<br/>
                                            한국외국어대학교 국제지역대학원 중국학과 교수
                                        </div>
                                    </div>
                                    <div className={"h8"}/>
                                    <div className={width < 678 ? "flexRow" : "flexColumn"}>
                                        <div className={"ft-14-600 w80"}>2002.03 ~</div>
                                        <div className={"w4"}/>
                                        <div className={"ft-14-600 textAlign-left"}>
                                            한국외국어대학교 국제사회교육원 매경-외대<br/>
                                            차이나 CEO 글로벌 전략과정 책임교수
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={width < 678 ? "h80" : "w80"}/>
                        <div className={"flexColumn ft-16-400"} style={{lineHeight:"150%"}}>
                            <span className={"ft-20-700"}>한국국제교육교류우호협회를 방문해 주신 여러분을 환영합니다.</span><br/><br/>

                            글로벌 사회가 갈수록 가까워지고 있습니다. 이제 ‘지구촌’이라는 말이 나올 정도입니다. 안 그래도 지정학적 특성상 글로벌 교류가 절실한 게 한국입니다.<br/><br/>
                            지구촌 시대 글로벌 교류는 한국의 미래 운명을 좌우할 가장 중요한 요소입니다.<br/><br/>
                            그런 교류를 어린 학생들부터 시작하자는 취지에서 만들어진 것이 본 협회입니다. 이미 10년 이상을 학생들의 교육교류에 힘써왔습니다.<br/><br/>
                            올 2024년은 협회가 새로운 전기를 맞은 해입니다. 학생들의 인적 교류는 물론, 미디어 교류와 국가 차원의 문화교류 전략수립을 지원하는 등의 외연적 확장을 한 것입니다.<br/><br/>
                            한국과 중국 유학생들이 베이징 특파원 출신 언론계 선배들과 함께 데이터경제포럼을 구성했습니다. 이들은 아시아를 중심으로 한 경제데이터 분석과 함께, 미디어교류 활동을 지원하고 가짜뉴스 근절 활동을 펼치고 있습니다.<br/><br/>
                            또 학계 관련 분야 교수들로 구성된 국제전략포럼에서는 급변하는 지구촌 정세변동을 살피며, 정부는 물론, 산업과 문화 등 각계의 국제 교류 전략 수립을 지원하고 있습니다.<br/><br/>
                            이 모든 활동은 지구촌 각국과 우리 한국이 전면적인 교류를 통해 함께 ‘지구촌 운명’을 책임지고 만들어 갈 수 있도록 하기 위한 것입니다.<br/><br/>
                            많은 분들의 격려와 지원을 기대합니다. 감사합니다.<br/><br/><br/>

                            <span className={"ft-16-700"}>이사장 강 준 영</span><br/>
                            <span className={"ft-16-700"}>사단법인 국제교육교류우호협회</span>
                        </div>
                    </div>
                    <div className={"h100"}/>
                </div>
                :
                sub === "1" ?
                    <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <div className={"flexColumn ft-16-400"} style={{lineHeight:"150%"}}>
                            <span className={"ft-20-700"}>지구촌 시대 글로벌 교류는 한국의 미래 운명을 좌우할 가장 중요한 요소입니다.</span><br/>
                            <span className={"ft-20-700"}>협회는 어린 학생시절부터 글로벌 교류를 하도록 지원하자는 취지에서 만들어졌습니다.</span><br/><br/>

                            이미 10년 이상을 학생들의 교육교류에 힘써왔습니다.<br/><br/>
                            올 2024년은 협회가 새로운 전기를 맞습니다.<br/><br/>
                            학생들의 인적 교류는 물론, 미디어 교류와 국가 차원의 문화교류 전략수립을 지원하는 등의 외연 확장을 했습니다.<br/><br/>
                            한국과 중국 유학생들이 베이징 특파원 출신 언론계 선배들과 함께 데이터경제포럼을 구성했습니다.<br/><br/>
                            또 학계 관련 분야 교수들로 구성된 국제전략포럼 활동도 펼칩니다.<br/><br/>
                        </div>

                        <div className={"h40"}/>
                        <div className={"ft-20-700"}>주요 목표</div><br/><br/>
                        <div className={"h10"}/>
                        {/*<div className={width < 678 ? "flexColumn" : "flexRow flexAlign-between"}>*/}
                        {/*</div>*/}
                        <div className={width < 678 ? "flexColumn" : "flexRow flexAlign-between"}>
                            {/* 첫째 */}
                            <div
                                style={{
                                    width:width < 678 ? "100%" : "20%",
                                    minHeight:"160px",
                                    backgroundColor: '#f9f9f9',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h4>첫째</h4>
                                <p>개인 삶의 중심 확보와 사회적 관계 형성을 위한 전인적인 인성의 확립</p>
                            </div>

                            {/* 둘째 */}
                            <div
                                style={{
                                    width:width < 678 ? "100%" : "20%",
                                    minHeight:"160px",
                                    backgroundColor: '#f9f9f9',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h4>둘째</h4>
                                <p>흥미와 관심 영역에 대한 다양한 섭렵을 바탕으로 주체적인 진로 선택</p>
                            </div>

                            {/* 셋째 */}
                            <div
                                style={{
                                    width:width < 678 ? "100%" : "20%",
                                    minHeight:"160px",
                                    backgroundColor: '#f9f9f9',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h4>셋째</h4>
                                <p>국제적으로 경쟁력 있는 대학 진학의 기회 획득</p>
                            </div>

                            {/* 넷째 */}
                            <div
                                style={{
                                    width:width < 678 ? "100%" : "20%",
                                    minHeight:"160px",
                                    backgroundColor: '#f9f9f9',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    marginBottom: '20px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h4>넷째</h4>
                                <p>사회적으로 인정 받을 수 있는 전문직 자격증 취득을 통한 내실 있는 직업의 확보</p>
                            </div>
                        </div>
                        <div className={"h100"}/>
                    </div>                    :
                    sub==="2" ?
                        <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                            <img src={"/images/main1sub0_2.png"} className={"w-full"}/>
                            <div className={"h100"}/>
                        </div>                        :
                        sub==="3" ?
                            <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                                <h2>협회 연혁</h2>

                                {/* 2021's */}
                                <div style={yearBlockStyle}>
                                    <h3>2021's</h3>
                                    <ul>
                                        <li>7 (주)다인리더스 / (주)PCNC 와 업무협약 MOU 체결</li>
                                        <li>5 (주)해오름커뮤니케이션즈와 업무협약 MOU 체결</li>
                                    </ul>
                                </div>
                                <div style={dividerStyle}></div>

                                {/* 2020's */}
                                <div style={yearBlockStyle}>
                                    <h3>2020's</h3>
                                    <ul>
                                        <li>9 라시에라대(La Sierra University)와 교육협력 MOU 체결</li>
                                    </ul>
                                </div>
                                <div style={dividerStyle}></div>

                                {/* 2019's */}
                                <div style={yearBlockStyle}>
                                    <h3>2019's</h3>
                                    <ul>
                                        <li>8 남일리노이주립대(SIUE)와 교육협력 MOU 체결</li>
                                        <li>6 몽골 MIAT항공과 산학협력협약(MOU) 체결</li>
                                        <li>3 노스캐롤라이나주립대 그린스보르(UNCG)와 교육협력 MOU 체결</li>
                                    </ul>
                                </div>
                            </div>                            :
                            <div>지도가 들어갑니다.(api키 발급 미완료)</div>
            }


        </div>
    );
}

export default Main1;
