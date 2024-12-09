import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth.jsx";



function Main2() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const width = useWindowWidth();
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const subContents = ["국제전략포럼", "데이터경제포럼", "교육문화교류플랫폼"]
    const paragraphStyle = {
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'justify',
    };

    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={`/images/main2sub${sub}.png`} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"}/>
            {sub === "0" ?
                <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                    <h2>국제전략포럼</h2>


                    <p style={paragraphStyle}>
                        인간관계와 마찬가지로, 국가 간 교류도 가까울수록 갈등이 발생할 수 있습니다. 그러나 이러한 차이와 갈등은 상호 이해와 성장을 위한 기회가 될 수 있습니다.
                    </p>

                    <p style={paragraphStyle}>
                        국제전략포럼은 글로벌 각국의 문화 속에서 한국의 가치를 더 깊이 전달하고, 다른 문화를 이해하며 협력할 수 있는 전략을 모색합니다.
                    </p>

                    <p style={paragraphStyle}>
                        포럼은 한국의 전통과 현대 문화를 글로벌 시장에서 더 깊이 이해받고 존중받을 수 있도록 지원합니다. 단순히 소비되는 콘텐츠를 넘어, 한국적인 것들이 세계 문화 속에서 공감과 존중을 받을 수 있도록 다양한 교류 프로그램을 제공합니다.
                    </p>

                    <p style={paragraphStyle}>
                        문화적 교류는 차이를 인정하고 새로운 가능성을 발견하는 과정입니다. 포럼은 국제 세미나와 교류 프로젝트를 통해, 국가 간의 입장과 가치를 이해하고 협력 모델을 개발합니다.
                    </p>

                    <p style={paragraphStyle}>
                        포럼은 교류 과정에서 발생할 수 있는 갈등을 해결하기 위해 대화의 장을 마련하고, 이를 통해 지속 가능한 협력 모델을 구축합니다.
                    </p>

                    <p style={paragraphStyle}>
                        국제전략포럼은 한국과 글로벌 각국 간의 전략적 협력을 강화하며, 문화적 차이를 존중하고 공통의 가치를 찾아가는 플랫폼으로 성장해 나갈 것입니다.
                    </p>

                </div>                :
                sub === "1" ?
                    <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <h2>데이터경제포럼</h2>


                        <p style={paragraphStyle}>
                            21세기 글로벌 경제는 데이터가 핵심 자산으로 자리 잡으며, 데이터 기반 의사결정과 교류의 중요성이 나날이 커지고 있습니다. 특히, 한국과 중국은 아시아 경제를 이끄는 주요 국가로서, 양국 간 경제데이터의 분석과 교류는 국제적 협력과 상호 이해의 새로운 지평을 열고 있습니다. 이러한 맥락에서 데이터경제포럼은 한국과 중국 유학생들이 언론계 선배들과 함께 경제데이터 분석 역량을 강화하고, 양국 간 미디어 교류를 통해 상호 협력의 기반을 다지는 장을 제공합니다.
                        </p>

                        <p style={paragraphStyle}>
                            데이터경제포럼은 한국과 중국 유학생들이 경제와 데이터 분석에 대한 실질적 역량을 키울 수 있도록 돕는 것을 목표로 합니다. 유학생들은 포럼을 통해 언론계 선배들과 협업하며, 경제 데이터의 수집, 분석, 시각화 과정을 경험하고, 이를 기반으로 실질적이고 혁신적인 인사이트를 도출하는 훈련을 받습니다.
                        </p>

                        <p style={paragraphStyle}>
                            특히, 베이징 특파원 출신의 언론계 선배들이 멘토로 참여해 유학생들에게 경제 데이터의 활용법과 미디어 보도의 노하우를 전수합니다. 이 과정을 통해 유학생들은 데이터와 언론의 융합이 경제적, 사회적 문제를 해결하는 데 어떤 가치를 제공할 수 있는지 깊이 이해하게 됩니다.
                        </p>

                        <p style={paragraphStyle}>
                            데이터경제포럼은 단순히 경제 데이터를 분석하는 데 그치지 않고, 아시아를 중심으로 한 경제 협력의 새로운 모델을 제시합니다. 한국과 중국이 중심이 되어 아시아 지역의 경제 데이터를 공동으로 분석하고, 이를 기반으로 새로운 협력 가능성을 탐색합니다.
                        </p>

                        <p style={paragraphStyle}>
                            이를 통해, 양국 유학생들은 데이터 기반의 경제 통찰력을 키우고, 지역 경제의 잠재력을 탐구하며, 국제적 관점에서 경제 문제를 해결할 수 있는 능력을 갖추게 됩니다. 이러한 활동은 한중 양국뿐만 아니라 아시아 전체의 경제적 협력과 발전을 촉진하는 데 기여합니다.
                        </p>

                        <p style={paragraphStyle}>
                            데이터경제포럼의 중요한 축은 미디어 교류 활동입니다. 언론계 선배들의 멘토링을 기반으로 한중 유학생들은 경제 데이터를 활용한 미디어 콘텐츠 제작 과정을 배우고, 양국 간의 미디어 협력을 증진시킬 수 있는 방법을 모색합니다.
                        </p>

                        <p style={paragraphStyle}>
                            미디어 교류는 단순히 콘텐츠를 제작하는 데 그치지 않고, 서로 다른 문화적 배경과 관점을 공유하며, 경제 데이터를 중심으로 한 공동 프로젝트를 추진하는 기회가 됩니다. 이로써, 한중 유학생들은 국제적 협업의 가치를 배우고, 글로벌 무대에서 경쟁력 있는 언론인으로 성장할 수 있는 발판을 마련합니다.
                        </p>

                        <p style={paragraphStyle}>
                            데이터경제포럼은 한국과 중국 유학생들의 협력을 넘어, 데이터 경제 생태계의 지속 가능성을 확보하는 데 초점을 맞추고 있습니다. 이를 위해, 데이터 분석 및 미디어 관련 전문가 네트워크를 구축하고, 한중 양국의 기업 및 공공기관과의 협력 프로그램을 개발하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            장기적으로, 데이터경제포럼은 아시아를 넘어 글로벌 경제 데이터 분석과 교류의 중심으로 자리 잡으며, 유학생들에게 데이터 경제 시대에 필요한 전문성을 제공하고, 한중 간의 협력 모델을 확장해 나갈 것입니다.
                        </p>
                    </div>                    :

                    <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <h2>교육문화교류플랫폼</h2>


                        <p style={paragraphStyle}>
                            21세기 후기 고등교육 대중화 시대의 도래는 대학교육이 더 이상 소수의 국가 동량과 엘리트를 양성하는 신성한 상아탑으로서 동경과 선망의 대상이 아니라 누구에게나 기회와 혜택을 제공하는 열린 교육의 장으로 변화하고 있음을 보여줍니다. 이러한 변화는 고등교육에 대한 문호 개방과 보편화, 대량화를 기반으로 이루어졌으며, 이제는 전 세계적으로 누구나 학습하고 성장할 수 있는 기회와 플랫폼을 제공해야 하는 새로운 시대적 요구를 반영하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            21세기 고등교육의 미래는 대학과 같은 고등교육 기관들이 전통적 역할을 넘어 학생과 학부모의 다양하고 특화된 요구를 해결하고, 글로벌 전문지식과 경쟁력을 제공하는 Solution Provider로서의 역할을 얼마나 효과적으로 수행하느냐에 달려 있습니다. 이러한 맥락에서 대학 간의 협력과 교류는 단순히 지식 전달을 넘어선 글로벌 경쟁력 향상의 핵심 도구로 자리 잡고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            교육문화교류플랫폼은 이러한 시대적 변화에 발맞추어, 교육 수요자인 학생과 학부모가 고등교육을 통해 얻고자 하는 보편적 요구를 충족시키기 위해 노력하고 있습니다. 이를 위해 세계 각국의 고등교육 기관들과의 협력을 통해 글로벌 인지도를 갖춘 교육 프로그램을 개발하고, 학생들이 세계적으로 인정받는 학위를 취득하며 경쟁력 있는 전공 전문지식을 축적할 수 있도록 지원하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            특히, 본 플랫폼은 글로벌 고등교육 기관들을 발굴하여 그들과의 교육 교류와 프로그램 협력을 통해 학생들이 전문직 라이선스 확보는 물론, 각자에게 특화된 글로벌 경쟁력을 구축할 수 있는 기반을 제공합니다. 이러한 협력 활동은 단순한 교류를 넘어, 학생 개개인의 삶에 실질적인 가치를 더하는 고등교육의 새로운 모델을 제시합니다.
                        </p>

                        <p style={paragraphStyle}>
                            교육문화교류플랫폼은 고등교육의 직접 수요자인 학생과 학부모가 투자한 시간과 노력, 그리고 경제적 비용의 가치를 높이는 것을 최우선 과제로 삼고 있습니다. 교육이 단순한 학위 취득의 과정이 아니라, 글로벌 시대가 요구하는 실질적이고 경쟁력 있는 결과를 제공해야 한다는 확신 아래, 후회 없는 교육 경험과 성과를 보장하기 위해 최선을 다하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            교육문화교류플랫폼은 대학과 대학, 학교와 학교 간의 인적, 문화, 교육 분야의 교류 활동을 더욱 확대하고 심화시키는 데 앞장설 것입니다. 이러한 교류는 단순히 교육의 범위를 확장하는 데 그치지 않고, 서로 다른 문화와 지식을 융합하며 21세기 글로벌 교육시장에서 새로운 기회를 창출하는 기반이 될 것입니다.
                        </p>

                        <p style={paragraphStyle}>
                            본 플랫폼은 글로벌 네트워크와 협력 모델을 통해 교육시장의 새로운 패러다임을 제시하며, 교육의 본질적 가치를 재조명하는 데 앞장설 것입니다. 21세기 글로벌 고등교육의 미래를 선도하며, 학생들의 성공을 위한 길잡이로 자리매김할 것을 약속드립니다.
                        </p>
                    </div>
            }
        </div>
    );
}

export default Main2;
