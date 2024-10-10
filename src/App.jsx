import {useEffect, useState} from 'react'
import {useRecoilState, useSetRecoilState} from "recoil";
import {requestSetSystemItem, systemInfo} from "./contexts/recoil.jsx";
import {enqueueSnackbar} from "notistack";
import {UserGetUserInfo} from "./contexts/api.jsx";
import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";
import Home from "./pages/Home.jsx";
import MobileNavigation from "./components/MobileNavigation.jsx";
import DesktopNavigation from "./components/DesktopNavigation.jsx";
import Footer from "./components/Footer.jsx";
import Main1 from "./pages/Main1.jsx";
import Main2 from "./pages/Main2.jsx";
import Main3 from "./pages/Main3.jsx";
import Main4 from "./pages/Main4.jsx";

function App() {
    const [system, setSystem] = useRecoilState(systemInfo);
    const [isLogin,setIsLogin] = useState(false)
    const setSystemItemState = useSetRecoilState(requestSetSystemItem);

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };



    const routerPush = useNavigate();

    return (
        <div className={"flexColumn flexAlign-column"} style={{width:"100vw"}} >

            <DesktopNavigation/>
            <MobileNavigation/>
            <div className={"flexColumn flexAlign-column w-full"} style={{minHeight:"calc(100vh - 100px)", borderTop:"1px solid #e0e0e0", padding:"0px 20px"}}>
                <Routes>
                    <Route path="/" element={<Home />} />,
                    <Route path="/main1" element={<Main1 />} />,
                    <Route path="/main2" element={<Main2 />} />,
                    <Route path="/main3" element={<Main3 />} />,
                    <Route path="/main4" element={<Main4 />} />,
                </Routes>
            </div>
            <Footer/>



        </div>
    )
}

export default App
