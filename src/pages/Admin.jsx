import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";


function Admin() {
    const [user,setUser]= useRecoilState(userInfo)
    const width = useWindowWidth();
    const routerPush = useNavigate();

    return (
        <div className={"flexRow"} style={{width:"100vw"}} >

            <div className={"flexColumn bg-black"} style={{minWidth:"190px", width:"190px", padding:"16px", height:"100vh"}}>
                <div className={"h20"}/>
                <div className={"ft-20-800 co-white ft-main-1"}>국제교육교류우호협회 [Admin]</div>

                <div className={"h40"}/>
                <div className={"ft-16-700 co-white cursor"} style={{marginLeft:"24px"}} onClick={()=>{routerPush("/")}}>공지사항</div>
                <div className={"h12"}/>
                <div className={"ft-16-700 co-white cursor"} style={{marginLeft:"24px"}} onClick={()=>{routerPush("/")}}>보도자료</div>
                <div className={"h12"}/>
                <div className={"ft-16-700 co-white cursor"} style={{marginLeft:"24px"}} onClick={()=>{routerPush("/")}}>협력제안</div>
                <div className={"h12"}/>

            </div>
            <div className={"w-full flexColumn"}>
                <div className={"flexRow flexAlign-column flexAlign-end h72 bg-gray"} style={{minWidth:"1440px"}}>

                    <div className={"w40"}/>
                    <div
                        className={"flexAlign bg-white co-black ft-14-400 cursor round-8"}
                        style={{padding:"8px 10px"}}
                        onClick={()=>{
                            localStorage.clear();
                            routerPush("/login")
                        }}
                    >Sign Out</div>
                </div>
                <div className={"w-full"} style={{height:"calc(100vh - 72px)"}}>

                </div>
            </div>


        </div>
    );
}

export default Admin;
