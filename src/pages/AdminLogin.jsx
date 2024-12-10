import {useEffect, useRef, useState} from "react";
import {useRecoilState} from "recoil";
import {userInfo} from "../contexts/recoil.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AuthLoginPost} from "../contexts/api.jsx";



function AdminLogin() {
    const [user,setUser]= useRecoilState(userInfo)
    const routerPush = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search');



    const [formData, setFormData] = useState({
        user_id: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault(); // 기본 제출 동작 방지
        console.log('Submitted Data:', formData);
        // 여기에서 formData를 서버로 전송하거나 추가 처리 가능


        AuthLoginPost(formData)
            .then((response ) => {
                console.log(response)
                let {status, data} = response;
                if(status == 200){
                    window.localStorage.setItem('auth_token', data.token);
                    routerPush("/admin")
                }
            })
            .catch( (error) => {
                // 실패 시 에러 처리 진행
                console.log(error);
                alert("아이디나 비밀번호 오류입니다.")
            })
            .finally(() => {

            })
    };




    return (
            <div className="w-full flexAlign" style={{width:"100vw", height:"100vh"}}>

                <div className={"flexColumn flexAlign-column"} style={{maxWidth:"400px"}}>
                    <div className={"ft-32-700 co-black"}>로그인</div>
                    <div className={"h60"}/>
                    <div className={"ft-20-400 co-gray-1"}>발급받은 아이디와 비밀번호를 입력해 주세요.</div>
                    <div className={"h40"}/>

                    <div className={"w-full"}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="user_id" className={"ft-16-600 co-black"}>
                                    아이디
                                </label>
                                <div className={"h12"}/>
                                <input
                                    type="text"
                                    id="user_id"
                                    name="user_id"
                                    value={formData.user_id}
                                    onChange={handleChange}
                                    className={"round-10 h40"}
                                    style={{ padding: '8px', width: '100%', border:"1px solid #d9d9d9"}}
                                    required
                                />
                            </div>
                            <div style={{ marginBottom: '15px' }}>
                                <label htmlFor="password" className={"ft-16-600 co-black"}>
                                    비밀번호
                                </label>
                                <div className={"h12"}/>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={"round-10 h40"}
                                    style={{ padding: '8px', width: '100%', border:"1px solid #d9d9d9"}}
                                    required
                                />
                            </div>
                        </form>
                    </div>
                    <div className={"h20"}/>
                    <div
                        className={"cursor round-8 w-full flexAlign bg-black"}
                        style={{padding:"16px 0px"}}
                        onClick={handleSubmit}
                    >
                        <div className={"flexRow flexAlign-column"}>
                            <div className={"ft-16-700 co-white"}>로그인</div>
                        </div>
                    </div>
                </div>


            </div>
    );
}

export default AdminLogin;
