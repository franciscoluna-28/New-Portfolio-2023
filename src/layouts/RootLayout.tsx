import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRef } from "react"




export default function RootLayout(){
      // Crea la referencia y especifica el tipo
  const homeRef = useRef<HTMLDivElement>(null);


    return(
        <>
        <Navbar/>
        <main ref={homeRef}>
        <Outlet/>
       {/*  <span className="flex py-4 justify-center dark:text-mainDarkBlue">© Copyright 2023 Francisco Luna</span> */}
        </main>
        <Footer homeRef={homeRef}/>
        </>
    )
}