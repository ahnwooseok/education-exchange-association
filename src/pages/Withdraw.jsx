import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";



function Withdraw() {
    const [user,setUser]= useRecoilState(userInfo)


    return (
        <div className="w-full">
            <div className={"h60"}/>
            출금


        </div>
    );
}

export default Withdraw;
