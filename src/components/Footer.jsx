import React from 'react';

const Footer = () => {
    return (
            <div className={"flexColumn w-full"} style={{padding:"12px 24px", backgroundColor:"#2B2B2B"}}>
                <img src={"/images/logo.png"}  style={{height:"48px", marginRight:"auto"}}/>
                <div className={"h8"}/>
                <div className={"ft-12-400 co-findy4"} style={{lineHeight:"150%"}}>
                    사단법인 한국국제교육교류우호협회 │ 대표 : 강준영<br/>
                    서울특별시 중랑구 사가정로 41길 6 (면목동)<br/>
                    외교부 인가 비영리 사단법인(제603호)<br/>
                    Tel 02-6471-8602<br/>
                </div>
                <div className={"h24"}/>
                <div className={"flexColumn flexAlign"}>
                    <div className={"ft-12-600 co-findy4"}>Copyright 2024. KOREA INTERNATIONAL EDUCATION EXCHANGE AND FRIENDSHIP ASSOCIATION. all rights reserved.</div>
                </div>
            </div>
    );
};

export default Footer;