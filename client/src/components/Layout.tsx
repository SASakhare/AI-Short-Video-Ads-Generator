import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import LenisScroll from "./lenis"
import Navbar from "./Navbar"
import SoftBackdrop from "./SoftBackdrop"




const Layout = () => {
    return (
        <>
            <SoftBackdrop />
            <LenisScroll />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout