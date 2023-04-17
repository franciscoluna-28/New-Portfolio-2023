import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function RootLayout(){
    return(
        <>
        <Navbar/>
        <main>
        <Outlet/>
       {/*  <span className="flex py-4 justify-center dark:text-mainDarkBlue">© Copyright 2023 Francisco Luna</span> */}
        </main>
        </>
    )
}