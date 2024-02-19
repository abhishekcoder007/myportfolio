import React,{useState} from "react";
import style from "./navbar.module.css";

const Navbar=()=>{
 const [show,setshow]=useState(false);

 const shownav=()=>{
    setshow(true)
 }
 const hidenav=()=>{
    
    setshow(old=>{
        if(old===false){
            return true
        }else return false})
 }



    return(
        <>

        
   
        <div className={style.main_container}>
            <div >
                <h1>Portfolio</h1>
            </div>
            <div className={style.main_containeritems} >
                <span> <a href="#1" style={{textDecoration:"none"}}>home</a></span>
                <span> <a href="#2" style={{textDecoration:"none"}}>about</a></span>
                <span> <a href="#3" style={{textDecoration:"none"}}>project</a></span>
                <span> <a href="#4" style={{textDecoration:"none"}}>skill</a></span>
                <span> <a href="#5" style={{textDecoration:"none"}}>contact</a></span>
                <div  className={style.main_mobileview}  onClick={hidenav}  onMouseEnter={shownav}>||||</div>

            </div>
        </div>

        {show&&<div className={style.mobilenav}>
        <p style={{ marginBottom:"21px",textAlign:"end"}} onClick={hidenav}>**</p>
                <div><a href="#1" style={{textDecoration:"none"}}>home</a> </div> 
                <div> <a href="#2" style={{textDecoration:"none"}}>about</a></div>
                <div><a href="#3" style={{textDecoration:"none"}}>project</a></div>
                <div><a href="#4" style={{textDecoration:"none"}}>skill</a></div>  
                <div> <a href="#5" style={{textDecoration:"none"}}>contact</a></div>
        </div>}
    

        </>
    )
}

export default Navbar;

