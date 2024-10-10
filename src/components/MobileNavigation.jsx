import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import {MdClose} from 'react-icons/md';


function MobileNavigation() {
    const routerPush = useNavigate();

    const [click, setClick] = useState(false);

    const Hamburger = <MdOutlineMenu className="HamburgerMenu"
                                     size="30px" color="black"
                                     onClick={() => setClick(!click)} />

    const Close = <MdClose className="HamburgerMenu"
                           size="30px" color="black"
                           onClick={() => setClick(!click)} />

    return (
        <div className={"flexRow flexAlign-between w-full h100 bg-White MobileNavigation"} style={{padding:"0px 20px"}}>
            <div className={"Title2B20 cursor"} style={{width:"180px"}} onClick={()=>{routerPush("/")}}>교육_아이콘</div>
            { click ? Close : Hamburger}

            {click &&
                <div
                    className={"flexColumn"}
                    style={{
                        justifyContent:"space-evenly",
                        position:"absolute",
                        top:"15vh",
                        right:"0",
                        height:"50vh",
                        width:"100%",
                        background:"blue"
                    }}
                >
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시1</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시2</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시3</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시4</div>
                    <div className={"Body1S16 cursor"} onClick={()=>{routerPush("/")}}>메뉴예시5</div>
                </div>
            }


        </div>
    )
}

export default MobileNavigation
