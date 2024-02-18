import React from "react";
import Navbar from "../../component/navbar/navbar";
import style from "./home.module.css"
import Aboutus from "../../component/aboutus/aboutus";
import Projects from "../../component/myprojects/projects";
import About from "../../component/about/about";
import Skill from "../../component/skills/skill";

const Home=()=>{
    return(
        <>
  
        <div className={style.main_head}>
            <Navbar/>
        </div>
        <div>
        <Aboutus/>
        <Projects/>
        <Skill/>

        </div>
        {/* <About/> */}
     
        </>
    )
}

export default Home;