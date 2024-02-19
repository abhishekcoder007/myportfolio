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
        <div id="1">
        <Aboutus/>
        </div>
        <div id="3">
        <Projects/>
        </div>
        <div id="4">
        
        <Skill/>
          
        </div>
        <div id="5">
        <About/>
        </div>
      
     
        </>
    )
}

export default Home;