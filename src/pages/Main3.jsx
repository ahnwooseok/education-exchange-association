import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";
import CooperationProposalForm from "../components/CooperationProposalForm.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";



function Main3() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const width = useWindowWidth();
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');
    const subContents = ["협력분야", "협력기관", "협력제안"]
    const categoryContainerStyle = {
        marginBottom: '40px',
    };


    const [formData, setFormData] = useState({
        name: '',
        organization: '',
        emailUsername: '',
        emailDomain: '',
        phone: '',
        proposal: '',
        file: null,
        captcha: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };
// 인라인 스타일 정의
    const fieldContainerStyle = {
        marginBottom: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '8px',
    };

    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={`/images/main3sub${sub}.png`} className={"w-full round-20"} style={{maxHeight:"500px"}}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    {subContents[sub]}
                </div>
            </div>
            <div className={"h40"}/>
            {sub === "0" ?
                <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                    <h2>협력분야</h2>
                    <p>
                        국제교육교류우호협회는 글로벌 교육협력을 통해 글로벌 인재 양성을 위해 노력하고 있습니다.
                    </p>


                    <div className={"flexRow w-full flexAlign-between"} style={{flexWrap:"wrap"}}>
                        <div style={{
                            marginBottom: '20px',
                            marginRight: '20px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            width:"100%"
                        }}
                        >
                            <h3>해외대학</h3>
                            <p>
                                미국 명문 주립대, 영국 명문 대학, 해외 의대 등 다양한 해외명문대학과의 교육협력을 통해 학생들에게 다양한 교육 기회를 제공하고 있습니다.
                            </p>
                        </div>

                        <div style={{
                            marginBottom: '20px',
                            marginRight: '20px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            width:"100%"
                        }}
                        >
                            <h3>해외고등학교</h3>
                            <p>
                                다양한 해외 고등학교와의 교육협력을 통해 학생들에게 다양한 교육 기회를 제공하고 있습니다.
                            </p>
                        </div>
                        <div style={{
                            marginBottom: '20px',
                            marginRight: '20px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            width:"100%"
                        }}
                        >
                            <h3>예술교육</h3>
                            <p>
                                예술로 유명한 해외 명문 대학교와 협력하여 국내의 재능 있는 예술 인재들을 국내에서 직접 오디션으로 선발하고 있습니다.
                            </p>
                        </div>
                        <div style={{
                            marginBottom: '20px',
                            marginRight: '20px',
                            padding: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '8px',
                            width:"100%"
                        }}
                        >
                            <h3>의료교육</h3>
                            <p>
                                글로벌 의료인을 꿈꾸는 국내 학생들을 위해 미국/호주/몽골 등 해외 의대로의 진학과 졸업을 통해 한국, 미국, 유럽 등 전세계에서 활약할 수 있는
                                의사/치과의사/수의사/약사 의 길을 제시합니다.                            </p>
                        </div>
                    </div>

                    <div className={"h40"}/>
                </div>
                :
                sub === "1" ?
                    <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <h2>협력기관</h2>
                        <div className={"h40"}/>
                        <div className="scrollContainer">
                            <div className="scrollContent">
                                {[...Array(2)].map((_, repeatIndex) => (
                                    <>
                                        <div key={`scrollItem-${repeatIndex}-1`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-1.svg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>대한민국 교육부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-2`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-2.svg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>대한민국 외교부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-3`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-3.webp" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>대한민국 통일부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-4`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-4.webp" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>주한 중국 대사관</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-5`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-5.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>중국 외교부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-6`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-6.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>중국 교육부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-7`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-7.jpg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>북경대학교</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-8`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-8.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>청화대학교</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-9`} className="flexColumn flexAlign round-12 scrollItem">

                                        <img src="/icons/icon-main3-9.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>절강대학교</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-10`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-10.svg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>상해교통대학교</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-11`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-11.jpg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>복단대학교</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-12`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-12.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>필리핀 교육부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-13`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-13.jpg" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>베트남 교육부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-14`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-14.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>말레이시아 교육부</div>
                                        </div>
                                        <div key={`scrollItem-${repeatIndex}-15`} className="flexColumn flexAlign round-12 scrollItem">
                                            <img src="/icons/icon-main3-15.png" style={{width:"200px"}}/>
                                            <div className={"h20"}/>
                                            <div className={"ft-20-600 GR750_6F"}>인도네시아 교육부</div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className={"h40"}/>
                    </div>
                    :
                    <div className={"flexColumn flexAlign-row"} style={{ padding: '20px', margin: '0 auto', maxWidth:"1000px"}}>
                        <h2>협력기관</h2>
                        <div className={"h20"}/>
                        <p>
                            * 국제교육교류협회와의 협력을 희망하는 개인/단체/기관은 협력제안서를 제출해 주시기 바랍니다.
                        </p>
                        <div className={"h20"}/>
                        <form onSubmit={handleSubmit} className={"w-full"} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                            {/* 신청자명 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>신청자명</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="신청자명을 입력하세요."
                                    value={formData.name}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>

                            {/* 회사/단체/기관명 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>회사/단체/기관명</label>
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="회사/단체/기관명을 입력하세요."
                                    value={formData.organization}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />
                            </div>

                            {/* 이메일 주소 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>이메일주소</label>
                                <div style={{ display: 'flex' }}>
                                    <input
                                        type="text"
                                        name="emailUsername"
                                        placeholder="이메일"
                                        value={formData.emailUsername}
                                        onChange={handleChange}
                                        style={emailInputStyle}
                                    />
                                    <span style={{ margin: '0 10px' }}>@</span>
                                    <input
                                        type="text"
                                        name="emailDomain"
                                        placeholder="도메인"
                                        value={formData.emailDomain}
                                        onChange={handleChange}
                                        style={emailInputStyle}
                                    />
                                    <select name="emailDomain" value={formData.emailDomain} onChange={handleChange} style={selectStyle}>
                                        <option value="">선택하세요</option>
                                        <option value="gmail.com">gmail.com</option>
                                        <option value="naver.com">naver.com</option>
                                        <option value="daum.net">daum.net</option>
                                    </select>
                                </div>
                            </div>

                            {/* 연락처 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>연락처</label>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="전화번호"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    style={smallInputStyle}
                                />
                            </div>

                            {/* 제안내용 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>제안내용</label>
                                <textarea
                                    name="proposal"
                                    placeholder="내용을 입력해주세요"
                                    value={formData.proposal}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, height: '100px', resize:"none"}}
                                />
                            </div>

                            {/* 첨부파일 */}
                            <div style={rowStyle}>
                                <label style={labelStyle}>첨부파일</label>
                                <input type="file" onChange={handleFileChange} style={inputStyle} />
                                <small>※ 첨부파일 용량은 10M 이하</small>
                            </div>

                            {/* 제출 버튼 */}
                            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                                <button type="submit" style={submitButtonStyle}>
                                    제출하기
                                </button>
                            </div>
                        </form>
                        <div className={"h40"}/>
                    </div>
            }

        </div>
    );
}

const rowStyle = {
    display: 'flex',
    alignItems:"center",
    marginBottom: '15px',
};

const labelStyle = {
    minWidth: '120px',
    paddingRight: '10px',
    fontWeight: 'bold',
};

const inputStyle = {
    width: '75%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const emailInputStyle = {
    width: '40%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const smallInputStyle = {
    width: '30%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const selectStyle = {
    width: '25%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const submitButtonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

export default Main3;
