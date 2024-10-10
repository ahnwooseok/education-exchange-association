import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";
import {MdOutlineMenu} from 'react-icons/md'
import { useState } from "react";
import {MdClose} from 'react-icons/md';
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md';


function MobileNavigation() {
    const routerPush = useNavigate();

    const [click, setClick] = useState(false);

    const Hamburger = <MdOutlineMenu size="30px" color="black" onClick={() => setClick(!click)} />
    const Close = <MdClose size="30px" color="black" onClick={() => setClick(!click)} />


    const [menuClk, setMenuClk] = useState(0)
    const Up = <MdOutlineArrowDropUp size="30px" color="black" onClick={() => setClick(!click)} />
    const Down = <MdOutlineArrowDropDown size="30px" color="black" onClick={() => setClick(!click)} />


    return (
        <div className={"flexRow flexAlign-between w-full h100 bg-White MobileNavigation"} style={{padding:"0px 20px"}}>
            <div className={"Title2B20 cursor"} style={{width:"180px"}} onClick={()=>{routerPush("/")}}>교육_아이콘</div>
            { click ? Close : Hamburger}
            {click &&
                <div
                    className={"flexColumn"}
                    style={{
                        position:"absolute",
                        top:"100px",
                        right:"0",
                        height:"120vh",
                        width:"100%",
                        background:"White",
                        zIndex:"999",
                        padding:"0px 20px",
                        borderTop:"1px solid #e0e0e0"
                    }}
                >
                    <div className={"flexRow flexAlign-between cursor"} style={{marginTop:"20px"}} onClick={()=>{menuClk === 1 ? setMenuClk(0) : setMenuClk(1)}}>
                        <div className={"Body1S16 cursor"}>협회 소개</div>
                        { menuClk === 1 ? Up : Down}
                    </div>
                    {
                        menuClk === 1 ?
                            <div className={"flexColumn"} style={{padding:"10px 20px"}}>
                                <div className={"Body2M16 cursor"} style={{padding: "10px 0px"}} onClick={() => {
                                    routerPush("/main1?sub=0")
                                    setClick(false)
                                }}>인사말
                                </div>
                                <div className={"Body2M16 cursor"} style={{padding: "10px 0px"}} onClick={() => {
                                    routerPush("/main1?sub=1")
                                    setClick(false)
                                }}>설립목적
                                </div>
                                <div className={"Body2M16 cursor"} style={{padding: "10px 0px"}} onClick={() => {
                                    routerPush("/main1?sub=2")
                                    setClick(false)
                                }}>조직/조직도
                                </div>
                                <div className={"Body2M16 cursor"} style={{padding: "10px 0px"}} onClick={() => {
                                    routerPush("/main1?sub=3")
                                    setClick(false)
                                }}>협회연혁
                                </div>
                                <div className={"Body2M16 cursor"} style={{padding: "10px 0px"}} onClick={() => {
                                    routerPush("/main1?sub=4")
                                    setClick(false)
                                }}>오시는길
                                </div>
                            </div>
                            :
                            ""
                    }
                    <div className={"flexRow flexAlign-between cursor"} style={{marginTop:"20px"}} onClick={()=>{menuClk === 2 ? setMenuClk(0) : setMenuClk(2)}}>
                        <div className={"Body1S16 cursor"}>협회 사업</div>
                        { menuClk === 2 ? Up : Down}
                    </div>

                    {
                        menuClk === 2 ?
                            <div className={"flexColumn"} style={{padding:"10px 20px"}}>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=0")
                                    setClick(false)}}>사업1</div>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=1")
                                    setClick(false)}}>사업2</div>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main2?sub=2")
                                    setClick(false)}}>사업3</div>
                            </div>
                            :
                            ""
                    }
                    <div className={"flexRow flexAlign-between cursor"} style={{marginTop:"20px"}} onClick={()=>{menuClk === 3 ? setMenuClk(0) : setMenuClk(3)}}>
                        <div className={"Body1S16 cursor"}>협회 협력</div>
                        { menuClk === 3 ? Up : Down}
                    </div>
                    {
                        menuClk === 3 ?
                            <div className={"flexColumn"} style={{padding:"10px 20px"}}>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main3?sub=0")
                                    setClick(false)}}>협력분야</div>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main3?sub=1")
                                    setClick(false)}}>협력기관</div>
                            </div>
                            :
                            ""
                    }
                    <div className={"flexRow flexAlign-between cursor"} style={{marginTop:"20px"}} onClick={()=>{menuClk === 4 ? setMenuClk(0) : setMenuClk(4)}}>
                        <div className={"Body1S16 cursor"}>협회 소식</div>
                        { menuClk === 4 ? Up : Down}
                    </div>
                    {
                        menuClk === 4 ?
                            <div className={"flexColumn"} style={{padding:"10px 20px"}}>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main4?sub=0")
                                    setClick(false)}}>공지사항</div>
                                <div className={"Body2M16 cursor"} style={{padding:"10px 0px"}} onClick={()=>{routerPush("/main4?sub=1")
                                    setClick(false)}}>보도자료</div>
                            </div>
                            :
                            ""
                    }
                </div>
            }

        </div>
    )
}

export default MobileNavigation
