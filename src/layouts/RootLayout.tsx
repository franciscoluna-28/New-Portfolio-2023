import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";







export default function RootLayout(){
    return(
        <>
        <Navbar/>
        <main className="w-full! relative justify-center flex overflow-x-hidden!">
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}