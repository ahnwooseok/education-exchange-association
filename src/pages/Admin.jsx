import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function Admin() {
    const [user,setUser]= useRecoilState(userInfo)
    const width = useWindowWidth();
    const routerPush = useNavigate();

    const editorRef = useRef();

    const handleGetContent = () => {
        const editorInstance = editorRef.current.getInstance();
        const markdown = editorInstance.getMarkdown(); // 마크다운 값 가져오기
        console.log(markdown);
    };


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
                            routerPush("/")
                        }}
                    >Sign Out</div>
                </div>
                <div className={"w-full"} style={{height:"calc(100vh - 72px)"}}>

                    <div>
                        <h1>TOAST UI Editor with React</h1>
                        <Editor
                            ref={editorRef}
                            initialValue="Hello, TOAST UI Editor!" // 초기 내용
                            previewStyle="vertical" // 프리뷰 스타일: vertical 또는 tab
                            height="500px" // 에디터 높이
                            initialEditType="markdown" // 초기 에디터 타입: markdown 또는 wysiwyg
                            useCommandShortcut={true} // 단축키 활성화 여부
                        />
                        <button onClick={handleGetContent} style={{ marginTop: "20px" }}>
                            Get Markdown Content
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Admin;
