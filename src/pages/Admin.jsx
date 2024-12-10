import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import AdminForm from "./AdminForm.jsx";

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


    const [selected, setSelected] = useState(0)

    return (
        <div className={"flexColumn"} style={{width:"100vw"}} >
            <div className={"w-full flexAlign"} style={{minHeight:"80px"}}>
                <div
                    className={"flexRow flexAlign-row w-full"}
                    style={{
                        padding: "10px 20px",
                        flexWrap: width <= 678 ? "wrap" : "nowrap", // 좁은 화면에서는 줄바꿈 허용
                        borderBottom:"1px solid #d9d9d9"
                    }}
                >
                    {["공지사항", "보도자료", "협력제안"].map((item, idx) => (
                        <div
                            key={idx}
                            className={"cursor ft-16-700"}
                            onClick={() => {
                                setSelected(idx); // 현재 선택된 버튼을 state로 관리
                            }}
                            style={{
                                marginLeft: width <= 678 ? "0" : idx === 0 ? "0" : "24px", // 첫 번째 버튼에는 margin 제외
                                marginBottom: width <= 678 ? "12px" : "0", // 모바일에서 버튼 간 간격
                                padding: "8px 16px",
                                borderRadius: "8px",
                                backgroundColor: selected === idx ? "#007BFF" : "transparent", // 선택된 버튼 배경색
                                color: selected === idx ? "#fff" : "#ccc", // 선택된 버튼 글자색
                                textAlign: "center",
                                minWidth: "80px",
                                transition: "all 0.3s ease", // 부드러운 색상 전환 효과
                            }}
                        >
                            {item}
                        </div>
                    ))}
                    <div
                        className={"cursor ft-16-700"}
                        onClick={() => {
                            localStorage.clear(); // 로컬 스토리지 비우기
                            routerPush("/"); // 홈으로 이동
                        }}
                        style={{
                            marginLeft: width <= 678 ? "0" : "24px", // 첫 번째 버튼에는 margin 제외
                            marginBottom: width <= 678 ? "12px" : "0", // 모바일에서 버튼 간 간격
                            padding: "8px 16px",
                            borderRadius: "8px",
                            backgroundColor: "#ff4d4f", // 로그아웃 버튼 고유 색상
                            color: "#fff", // 로그아웃 버튼 글자색
                            textAlign: "center",
                            minWidth: "80px",
                            transition: "all 0.3s ease", // 부드러운 색상 전환 효과
                        }}
                    >
                        로그아웃
                    </div>
                </div>
            </div>
            <AdminForm/>

        </div>
    );
}

export default Admin;
