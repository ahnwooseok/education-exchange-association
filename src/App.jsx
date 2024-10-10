import {useEffect, useState} from 'react'
import {useRecoilState, useSetRecoilState} from "recoil";
import {requestSetSystemItem, systemInfo} from "./contexts/recoil.jsx";
import {enqueueSnackbar} from "notistack";
import {UserGetUserInfo} from "./contexts/api.jsx";
import {BrowserRouter, Router, Route, Routes, useLocation, useNavigate, NavLink} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Remittance from "./pages/Remittance.jsx";
import Withdraw from "./pages/Withdraw.jsx";
import Statistics from "./pages/Statistics.jsx";
import MobileNavigation from "./components/MobileNavigation.jsx";
import DesktopNavigation from "./components/DesktopNavigation.jsx";

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



            <div className={"w-full flexAlign bg-GR100_F9"}>
                <div className={"flexRow flexAlign-row"} style={{minHeight:"calc(100vh - 80px)", minWidth:"1440px", width:"1440px"}}>
                    <Routes>
                        <Route path="/" element={<Home />} />,
                        <Route path="/remittance" element={<Remittance />} />,
                        <Route path="/withdraw" element={<Withdraw />} />,
                        <Route path="/statistics" element={<Statistics />} />,
                    </Routes>
                </div>
            </div>


        </div>
    )
}

export default App
