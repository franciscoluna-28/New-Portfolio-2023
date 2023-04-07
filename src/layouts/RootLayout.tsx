import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RootLayout(){
    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
        <Footer/>
        <span className="mb-16 flex justify-center dark:text-mainDarkBlue">© Copyright 2023 Francisco Luna</span>
        </main>
        </>
    )
}