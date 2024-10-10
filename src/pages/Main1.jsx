import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";



function Main1() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
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
                <img src={"/images/그림1.png"} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"}/>
            {sub === "0" ?
                <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    {/* 이미지 섹션 */}
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <img
                            src={"/path_to_image.png"}  // 실제 이미지를 적용할 경로로 수정하세요
                            alt="Chairman Lee Joo-heum"
                            style={{ width: '200px', borderRadius: '8px' }}
                        />
                    </div>

                    {/* 인사말 및 약력 */}
                    <div>
                        <h2>인사말</h2>
                        <h3>사단법인 국제교육교류협회 이사장<br />이주흠</h3>

                        <h4>주요 약력</h4>
                        <ul>
                            <li>1979 외교부 입부(외무고시 13기)</li>
                            <li>2005 ~ 2006 주미얀마연방공화국 대사(11대)</li>
                            <li>2006 ~ 2008 외교안보연구원(현 국립외교원) 원장(29대)</li>
                        </ul>

                        {/* 인사말 내용 */}
                        <p>
                            국제교육교류협회를 방문해 주신 여러분을 환영합니다.<br />
                            사단법인 국제교육교류협회 이사장 이주흠입니다. 먼저 우리 협회를 방문해 주신 여러분을 진심으로 환영합니다!
                        </p>
                        <p>
                            비영리 사단법인인 우리 협회는 국가 간의 교육교류와 해외 교육단체 및 기관과의 협력을 설립 취지로 하고 있습니다.
                            그리고 이를 통해 우리나라 교육의 질을 향상시키고 다양화하면서 국제 경쟁력을 강화하는데 그 목표를 두고 있습니다.
                        </p>
                        <p>
                            국제교육교류협회는 지난 십여 년 간 이러한 목적을 이루기 위해 꾸준히 노력해 왔습니다. 그 결과 미국, 영국, 중남미 각국,
                            중국, 몽골, 말레이시아, 필리핀 등을 비롯한 여러 국가와 우리나라 교육기관 사이에 원활한 교류와 협력이 이뤄지도록
                            가교역할을 수행하게 되었습니다.
                        </p>
                        <p>
                            우리 협회가 추구하는 비전은 대한민국의 젊은이들을 위한 21세기형의 새로운 교육을 통해 글로벌 경쟁력을 갖춘 고소득의
                            전문직 인재를 양성한다는 것입니다. 따라서 앞으로 그 실천을 위해 국내외 여러 교육기관과 폭넓고 깊이 있는 교류와 협력을
                            위한 틀을 만들고 강화하기 위해 더욱 노력할 것입니다.
                        </p>
                        <p>
                            끝으로 우리 협회가 구태의연하고 진부한 기성교육의 틀을 벗어나 보다 넓은 세계를 무대로 보다 새로운 삶의 영역을 개척코자
                            하는 우리의 패기 있는 청년들에게 조금이나마 도움이 될 수 있기를 기대합니다.
                        </p>
                        <p>감사합니다.<br />이사장 이주흠</p>

                        <p>사단법인 국제교육교류협회</p>
                    </div>
                </div>                :
                sub === "1" ?
                    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                        {/* 설립 목적 */}
                        <h2>설립목적</h2>
                        <p>
                            국제교육교류협회는 21세기 급변하는 대한민국 교육시장의 현실에서 인성, 진학, 진로, 직업이라는 교육 핵심 키워드를 바탕으로 공교육과 사교육 그리고 대학교육과 사설기관교육, 전문직 양성교육을 통합하여 국내 교육시장뿐만 아니라 글로벌 교육시장에서 교육 수요자인 학생 및 학부모에게 원스탑 토탈 솔루션 One-stop Total Solution 서비스를 제공할 목적으로 설립된 비영리 사단법인 입니다. (2008.11.7. 외교부장관 설립허가 제603호)
                        </p>

                        {/* 목표 블록 */}
                        <div style={{ margin: '40px 0' }}>
                            <h3 style={{ marginBottom: '20px' }}>주요 목표</h3>

                            <div className={"flexRow flexAlign-between"}>
                                {/* 첫째 */}
                                <div
                                    style={{
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

                        </div>

                        {/* 기타 설명 */}
                        <p>
                            이와 같은 목표를 기반으로 교육 주체에게 확실한 결과값을 제공할 수 있다면, ‘교육’만이 유일한 자원인 우리나라의 현실에서 직접적인 교육 주체인 우리 학생들에게 확실한 대안이 될 수 있을 것입니다.
                        </p>
                    </div>                    :
                    sub==="2" ?
                        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                            <h2>조직도</h2>

                            {/* 이사장 섹션 */}
                            <div style={blockStyle('grey')}>
                                <h3>이사장</h3>
                                <p>Chairman, Board of Directors</p>
                            </div>

                            {/* 사무국 섹션 */}
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0' }}>
                                <div style={blockStyle('#c6007e')}>
                                    <h3>사무국</h3>
                                    <p>Secretary Bureau</p>
                                </div>
                            </div>

                            {/* 연구소 블록 */}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div style={blockStyle('#417bb7')}>
                                    <h3>인성진학 코칭연구소</h3>
                                    <p>Personality & Academic Coaching Institute</p>
                                </div>
                                <div style={blockStyle('#417bb7')}>
                                    <h3>진로직업 코칭연구소</h3>
                                    <p>Career & Professional Coaching Institute</p>
                                </div>
                                <div style={blockStyle('#417bb7')}>
                                    <h3>글로벌 고등교육 연구소</h3>
                                    <p>Global Higher Education Research Institute</p>
                                </div>
                            </div>
                        </div>                        :
                        sub==="3" ?
                            <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
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
