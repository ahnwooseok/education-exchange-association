import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";



function Statistics() {
    const [user,setUser]= useRecoilState(userInfo)


    return (
        <div className="w-full">
            <div className={"h60"}/>
            송금

        </div>
    );
}

export default Statistics;
