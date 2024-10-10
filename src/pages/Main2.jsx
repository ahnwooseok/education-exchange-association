import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";



function Main2() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const subContents = ["사업1", "사업2", "사업3"]
    const paragraphStyle = {
        lineHeight: '1.6',
        marginBottom: '20px',
        textAlign: 'justify',
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
                    <h2>인성진학 코칭연구소</h2>

                    <p style={paragraphStyle}>
                        인성교육은 개인의 절대값을 찾아가는 과정으로 자기주도성 확보를 근본 목적으로 합니다.
                        학생들은 어떤 존재로 분화될지 아직 알 수 없는 존재이기 때문에 안정적인 자기 주도성을 전제로
                        다양한 잠재성을 시도해 본다면 자신의 진학에 대한 구체적인 방향을 정립해 나갈 수 있습니다.
                    </p>

                    <p style={paragraphStyle}>
                        하루가 다르게 급변해가는 현대 사회 속에서 개인이 자신의 중심을 확보하고 유지해 가는 것은 결코 쉬운 일이 아닙니다.
                        IEEA 인성진학 코칭연구소에서는 인성을 개인의 주권을 확보하여 스스로의 자립을 꾀할 수 있게 해주는 존재의 영역에서 시작해
                        세상의 흐름을 파악해 사회의식을 확보하는 관계의 영역까지 관장하는 사회적 인성으로 정의하고 있습니다.
                        이러한 인성을 바탕으로 한 자신의 삶에 대한 주도적인 관심은 진학 문제도 주체적으로 풀어갈 수 있는 능력을 갖출 수 있게 해줍니다.
                        삶에 대한 관심이자 흥미라 할 수 있는 진학 선택이나 적응에 지속적으로 노력한다면 자기만의 중심성과 경쟁력 확보가 가능해집니다.
                    </p>

                    <p style={paragraphStyle}>
                        IEEA 인성진학 코칭연구소에서는 인성 교육을 통하여 개인의 기본적인 토대를 만들어 가고자 합니다.
                        인성교육은 개인의 절대값을 찾아가는 과정으로 자기주도성 확보를 근본 목적으로 합니다.
                        학생들은 어떤 존재로 분화될지 아직 알 수 없는 존재이기 때문에 안정적인 자기 주도성을 전제로 다양한 잠재성을 시도해 본다면
                        자신의 진학에 대한 구체적인 방향을 정립해 나갈 수 있습니다.
                        IEEA 인성진학 코칭연구소에서는 개인의 관심 분야를 바탕으로 법률, 경영, 의학, 교육, 방송, IT, 항공, 음악, 미술, 체육
                        10개 분야로 진학을 세분화하고 이를 기반으로 한 인성, 진학 솔루션을 확보하고 있습니다.
                    </p>

                    <p style={paragraphStyle}>
                        이렇게 확립된 자기중심성과 자기관심을 바탕으로 국내 중등 교육 과정에서 기초적인 교육을 수행해 간다면
                        이후 진학이나 직업은 그리 어렵지 않은 문제가 될 수 있습니다.
                        IEEA 인성진학 코칭연구소는 두 발로 굳건히 서서 스스로의 힘으로 자신의 삶을 이끌고 갈 수 있는 전인적인 인간을 꿈꿉니다.
                        자신의 관심사를 중심으로 진학을 찾아 경쟁력을 구축해 가는 사람만이 개인이 중심이 된 현대 사회에서
                        주도적인 역할을 담당할 수 있을 것입니다.
                    </p>
                </div>                :
                sub === "1" ?
                    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                        <h2>진로직업 코칭연구소</h2>

                        <p style={paragraphStyle}>
                            국제교육교류협회를 통해 진로에 대해 확정된 결과값을 얻은 교육 주체들은 글로벌한 경쟁력 확보를 통해 안정적인 직업을 확보할 수 있게 됩니다.
                        </p>

                        <p style={paragraphStyle}>
                            우리나라뿐만 아니라 전 세계가 청년 실업을 고민하는 현실 속에서 진로와 직업은 그 무엇보다 중요한 화두가 되었습니다.
                            진로와 직업에 대한 고려가 전제되지 않는 교육은 재교육의 필요 또는 사회로의 진입 실패라는 또 다른 문제 상황을 야기하고 있습니다.
                            따라서 국제교육교류협회에서는 진로와 직업 문제에 대한 해법을 제공하고자 진로직업 코칭연구소를 운영하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            진로직업 코칭연구소에서는 전문 직업을 최종 목표로 한 진로에 대한 해결책을 만들어 가고자 합니다.
                            국제교육교류협회의 가장 큰 장점이자 타 기관과의 차별점은 바로 진로에 대한 확정값을 제공한다는 것입니다.
                            고학력에서 전문직으로 이어지는 진로의 결과값은 이미 지난 10년의 시간 동안 국제교육교류협회와 함께 한 3,000여 명이 넘는 학생들을 그 증거로 합니다.
                            국제교육교류협회를 통해 진로에 대해 확정된 결과값을 얻은 교육 주체들은 글로벌한 경쟁력 확보를 통해 안정적인 직업을 확보할 수 있게 됩니다.
                        </p>

                        <p style={paragraphStyle}>
                            국제교육교류협회는 진로직업 코칭연구소를 통해 진로와 직업을 국가가 정해 놓은 틀에 맞춰야 하는 상수값이 아닌,
                            개인이 통제할 수 있는 변수값으로 제공하고 있습니다. 이를 통하여 사회적으로 인정받는 진로의 연장선상에서
                            전문적인 직업까지 획득하여 개인 삶의 완성을 돕고자 합니다.
                        </p>
                    </div>                    :

                    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                        <h2>글로벌 고등교육 연구소</h2>

                        <p style={paragraphStyle}>
                            21세기 후기 고등교육 대중화 시대의 도래는 대학교육이 더 이상 소수의 국가 동량과 엘리트를
                            양성하는 신성한 상아탑으로서 동경과 선망의 대상이 아니라 누구에게나 기회와 혜택을 제공하는 대학교육에 대한
                            문호 개방과 보편화, 그리고 대학교육의 대량화라는 시대적 변화를 그 바탕으로 하고 있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            21세기 고등교육의 미래는 대학과 같이 고등교육을 제공하는 주체들이 일부 행정 관료들의 천편일률적인 지침이나 지시가 아니라
                            고등교육을 받고자 하는 학생과 학부모의 Needs를 해결하고 글로벌 전문지식과 경쟁력을 제공하는 Solution Provider의 역할을
                            교육시장에서 얼마나 잘 수행할 수 있느냐에 달려있습니다.
                        </p>

                        <p style={paragraphStyle}>
                            IEEA 글로벌고등교육연구소는 교육수요자인 학생과 학부모들이 고등교육을 통해 얻고자 하는 보편적 Needs를 충족시킬 수 있는
                            글로벌 고등교육 기관들을 발굴하고 해당 기관들과의 교육 교류 및 프로그램 협력을 통해 세계적으로 인지도가 있는 대학의 학위 취득과
                            경쟁력 있는 전공 전문지식 축적, 그리고 전문직 라이선스 확보를 통해 학생 개개인에게 특화된 글로벌 경쟁력을 구축할 수 있도록 지원하고자 합니다.
                        </p>

                        <p style={paragraphStyle}>
                            IEEA 글로벌고등교육연구소는 고등교육의 직접 수요자인 학생과 학부모들이 투자한 시간과 노력, 그리고 경제적 비용의 가치를 인정하고
                            확실한 결과 값을 제공해줄 수 있는 고등교육이 21세기 글로벌시대가 요구하는 후기 고등교육의 올바른 방향이라고 확신합니다.
                        </p>
                    </div>            }
        </div>
    );
}

export default Main2;
