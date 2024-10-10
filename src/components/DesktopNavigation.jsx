import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";

function DesktopNavigation() {
    const routerPush = useNavigate();

    return (
        <div className={"flexRow flexAlign-between w-full h100 bg-White DesktopNavigation"} style={{padding:"0px 20px"}}>
            <div className={"Title2B20 cursor"} style={{width:"180px"}} onClick={()=>{routerPush("/")}}>교육_아이콘</div>
            <div className={"flexRow flexAlign-column flexAlign-between w-full"}>
                <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시1</div>
                <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시2</div>
                <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시3</div>
                <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시4</div>
                <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시5</div>
            </div>
        </div>
    )
}

export default DesktopNavigation
