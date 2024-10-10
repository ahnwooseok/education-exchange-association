import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";

function DesktopNavigation() {
    const routerPush = useNavigate();

    return (
        <div className={"DesktopNavigation w-full relative navi"} style={{padding:"0px 20px", maxWidth:"1600px"}}>


            <div className={"flexRow flexAlign-between w-full h100 bg-White"}>
                <div className={"Title2B20 cursor"} style={{width:"180px"}} onClick={()=>{routerPush("/")}}>교육_아이콘</div>
                <div className={"flexRow flexAlign-column flexAlign-around w-full"}>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/main1?sub=0")}}>협회 소개</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/main2?sub=0")}}>협회 사업</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/main3?sub=0")}}>협회 협력</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/main4?sub=0")}}>협회 소식</div>
                </div>
            </div>

            <div
                className={"absolute navi-component bg-White"}
                style={{
                    top: "100px",
                    width: `calc(100vw - 40px)`, // 공백 추가
                    maxWidth: `1560px`, // 공백 추가
                    zIndex:"999",
                }}
            >
                <div style={{width:"180px"}}/>
                <div className={"flexRow w-full"} style={{justifyContent:"space-around"}}>
                    <div className={"flexColumn flexAlign-column"}>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main1?sub=0")}}>인사말</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main1?sub=1")}}>설립목적</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main1?sub=2")}}>조직/조직도</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main1?sub=3")}}>협회연혁</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main1?sub=4")}}>오시는길</div>
                    </div>
                    <div className={"flexColumn flexAlign-column"}>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=0")}}>사업1</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=1")}}>사업2</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=2")}}>사업3</div>
                    </div>
                    <div className={"flexColumn flexAlign-column"}>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main3?sub=0")}}>협력분야</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main3?sub=1")}}>협력기관</div>
                    </div>
                    <div className={"flexColumn flexAlign-column"}>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main4?sub=0")}}>공지사항</div>
                        <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main4?sub=1")}}>보도자료</div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default DesktopNavigation
