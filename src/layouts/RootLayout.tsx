import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useContext } from "react";
import { RefContext } from "../context/ScrollContext";






export default function RootLayout(){
    const { homeRef } = useContext(RefContext);




    return(
        <>
        <Navbar/>
        <main ref={homeRef}>
        <Outlet/>
        </main>
        <Footer/>
        </>
    )
}