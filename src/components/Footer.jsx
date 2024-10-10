import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyles}>
            <div style={containerStyles}>
                <div style={logoContainerStyles}>
                    {/* 로고를 여기에 추가 (이미지 파일 경로를 넣으세요) */}
                    로고
                </div>
                <div style={infoStyles}>
                    <p>서울시 서초구 남부순환로00길 33 한국외교협회 별관 0층 000호</p>
                    <p>외교부 인가 비영리 사단법인(제000호)</p>
                    <p>Tel: 02-0000-0000</p>
                </div>
                <div style={copyrightStyles}>
                    <p>Copyright©INTERNATIONAL 000 000 000. All right reserved.</p>
                </div>
            </div>
        </footer>
    );
};

// 스타일링을 위한 객체 (CSS in JS 방식)
const footerStyles = {
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: '20px 0',
    textAlign: 'center',
};

const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
};

const logoContainerStyles = {
    marginBottom: '10px',
};

const logoStyles = {
    maxWidth: '150px',
};

const infoStyles = {
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.5',
    marginBottom: '10px',
};

const copyrightStyles = {
    fontSize: '12px',
    color: '#888',
};

export default Footer;