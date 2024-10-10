import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";



function Home() {
    const [user,setUser]= useRecoilState(userInfo)


    return (
        <div className="w-full">
            <div className={"h60"}/>
            <div className={"flexRow flexAlign-between"}>
               홈화면
            </div>



        </div>
    );
}

export default Home;
