import React, { useState } from 'react';

const CooperationProposalForm = () => {
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
        <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
            <h2>협력분야</h2>
            <p>
                국제교육교류협회는 글로벌 교육협력을 통해 글로벌 인재 양성을 위해 노력하고 있습니다.
            </p>

            <div style={fieldContainerStyle}>
                <h3>해외대학</h3>
                <p>
                    <strong>교류/협력: </strong>
                    미국 명문 주립대, 영국 명문 대학, 해외 의대 등 다양한 해외 명문대학과의 교육협력을 통해 학생들에게 다양한 교육 기회를 제공하고 있습니다.
                </p>
            </div>

            <div style={fieldContainerStyle}>
                <h3>해외고등학교</h3>
                <p>
                    <strong>교류/협력: </strong>
                    다양한 해외 고등학교와의 교육협력을 통해 학생들에게 다양한 교육 기회를 제공하고 있습니다.
                </p>
            </div>

            <div style={fieldContainerStyle}>
                <h3>예술교육</h3>
                <p>
                    <strong>교류/협력: </strong>
                    예술로 유명한 해외 명문 대학교와 협력하여 국내의 재능 있는 예술 인재들을 국내에서 직접 오디션으로 선발하고 있습니다.
                </p>
            </div>

            <div style={fieldContainerStyle}>
                <h3>의료교육</h3>
                <p>
                    <strong>교류/협력: </strong>
                    글로벌 의료인을 꿈꾸는 국내 학생들을 위해 미국/호주/몽골 등 해외 의대로의 진학과 졸업을 통해 한국, 미국, 유럽 등 전세계에서 활약할 수 있는
                    의사/치과의사/수의사/약사 의 길을 제시합니다.
                </p>
            </div>
            <div className={"h40"}/>
            <h2 style={{ textAlign: 'center' }}>협력제안</h2>
            <p style={{ textAlign: 'center' }}>
                * 국제교육교류협회와의 협력을 희망하는 개인/단체/기관은 협력제안서를 제출해 주시기 바랍니다.
            </p>

            <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
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
                    <div style={{ display: 'flex' }}>
                        <input
                            type="text"
                            name="phone"
                            placeholder="전화번호"
                            value={formData.phone}
                            onChange={handleChange}
                            style={smallInputStyle}
                        />
                    </div>
                </div>

                {/* 제안내용 */}
                <div style={rowStyle}>
                    <label style={labelStyle}>제안내용</label>
                    <textarea
                        name="proposal"
                        placeholder="내용을 입력해주세요"
                        value={formData.proposal}
                        onChange={handleChange}
                        style={{ ...inputStyle, height: '100px' }}
                    />
                </div>

                {/* 첨부파일 */}
                <div style={rowStyle}>
                    <label style={labelStyle}>첨부파일</label>
                    <input type="file" onChange={handleFileChange} style={inputStyle} />
                    <small>※ 첨부파일 용량은 10M 이하</small>
                </div>

                {/* 스팸방지 */}
                <div style={rowStyle}>
                    <label style={labelStyle}>스팸방지</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/path-to-captcha-image" alt="captcha" style={{ marginRight: '10px' }} />
                        <input
                            type="text"
                            name="captcha"
                            placeholder="스팸방지 코드를 입력하세요"
                            value={formData.captcha}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                {/* 제출 버튼 */}
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <button type="submit" style={submitButtonStyle}>
                        상담신청하기
                    </button>
                </div>
            </form>
        </div>
    );
};

// 인라인 스타일 정의
const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
};

const labelStyle = {
    width: '20%',
    textAlign: 'right',
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

export default CooperationProposalForm;