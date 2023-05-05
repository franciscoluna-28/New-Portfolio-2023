import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";







export default function RootLayout(){
    return(
        <>
        <Navbar/>
        <main className="justify-center flex">
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}