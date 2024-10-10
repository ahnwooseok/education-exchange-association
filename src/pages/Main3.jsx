import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useLocation} from "react-router-dom";



function Main3() {
    const [user,setUser]= useRecoilState(userInfo)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sub = searchParams.get('sub');

    return (
        <div className="w-full flexColumn">
            <div className={"h60"}/>
            <div className={"relative"}>
                <img src={"/images/그림1.png"} className={"w-full round-20"}/>
                <div className={"TitleS11 absolute White"} style={{left:"40px", top:"80%"}}>
                    교육교류협회 메인
                </div>
            </div>

        </div>
    );
}

export default Main3;
