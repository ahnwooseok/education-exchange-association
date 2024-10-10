import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";
import CooperationProposalForm from "../components/CooperationProposalForm.jsx";



function Main3() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const subContents = ["협력분야", "협력기관"]
    const categoryContainerStyle = {
        marginBottom: '40px',
    };

    const rowStyle = {
        display: 'flex',
        whiteSpace: 'nowrap',
        overflowX: 'scroll',
        padding: '10px 0',
    };

    const boxStyle = {
        minWidth: '200px',
        marginRight: '20px',
        border: '1px solid #ccc',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        textAlign: 'center',
    };

    const logoStyle = {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
        marginBottom: '10px',
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
                <CooperationProposalForm/>
                :
                <div style={{ padding: '20px', maxWidth: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                    <h2>협력기관</h2>

                    {/* 대학기관 */}
                    <div style={categoryContainerStyle}>
                        <h3>대학기관</h3>
                        <div style={rowStyle}>
                            <div style={boxStyle}>
                                <img src="/images/ny_suny_logo.png" alt="뉴욕주립대 로고" style={logoStyle} />
                                <p>뉴욕주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/california_state_logo.png" alt="캘리포니아주립대 로고" style={logoStyle} />
                                <p>캘리포니아주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/washington_state_logo.png" alt="워싱턴주립대 로고" style={logoStyle} />
                                <p>워싱턴주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/utah_state_logo.png" alt="유타주립대 로고" style={logoStyle} />
                                <p>유타주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/utah_state_logo.png" alt="유타주립대 로고" style={logoStyle} />
                                <p>유타주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/utah_state_logo.png" alt="유타주립대 로고" style={logoStyle} />
                                <p>유타주립대</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/utah_state_logo.png" alt="유타주립대 로고" style={logoStyle} />
                                <p>유타주립대</p>
                            </div>
                            {/* 추가 대학 */}
                        </div>
                    </div>

                    {/* 학교기관 */}
                    <div style={categoryContainerStyle}>
                        <h3>학교기관</h3>
                        <div style={rowStyle}>
                            <div style={boxStyle}>
                                <img src="/images/wooshin_high_logo.png" alt="우신고 로고" style={logoStyle} />
                                <p>우신고</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/baekam_high_logo.png" alt="백암고 로고" style={logoStyle} />
                                <p>백암고</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/gimpo_high_logo.png" alt="김포외고 로고" style={logoStyle} />
                                <p>김포외고</p>
                            </div>
                            {/* 추가 학교 */}
                        </div>
                    </div>

                    {/* 민간기관 */}
                    <div style={categoryContainerStyle}>
                        <h3>민간기관</h3>
                        <div style={rowStyle}>
                            <div style={boxStyle}>
                                <img src="/images/education_abroad_logo.png" alt="Education Abroad 로고" style={logoStyle} />
                                <p>미국 Education Abroad Forum</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/ntmc_logo.png" alt="NTMC 로고" style={logoStyle} />
                                <p>미국 NTMC USA</p>
                            </div>
                            <div style={boxStyle}>
                                <img src="/images/korea_times_logo.png" alt="Korea Times 로고" style={logoStyle} />
                                <p>Korea Times</p>
                            </div>
                            {/* 추가 민간기관 */}
                        </div>
                    </div>
                </div>
            }

        </div>
    );
}

export default Main3;
