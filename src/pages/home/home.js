import React from "react";
import Navbar from "../../component/navbar/navbar";
import style from "./home.module.css"

const Home=()=>{
    return(
        <>
  
        <div className={style.main_head}>
            <Navbar/>
        </div>
        </>
    )
}

export default Home;