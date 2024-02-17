import React,{useState} from "react";
import style from "./navbar.module.css";

const Navbar=()=>{
 const [show,setshow]=useState(false);

 const shownav=()=>{
    setshow(true)
 }
 const hidenav=()=>{
    setshow(false)
 }



    return(
        <>

        
   
        <div className={style.main_container}>
            <div >
                <h1>Portfolio</h1>
            </div>
            <div className={style.main_containeritems} >
                <span>home</span>
                <span>about</span>
                <span>project</span>
                <span>contact</span>
                <div  className={style.main_mobileview}  onClick={hidenav}  onMouseEnter={shownav}>||||</div>

            </div>
        </div>

        {show&&<div className={style.mobilenav}>
        <p style={{ marginBottom:"21px",textAlign:"end"}} onClick={hidenav}>**</p>
                <div>home </div> 
                <div>about</div>
                <div>project</div>
                <div>contact</div>  
        </div>}
    

        </>
    )
}

export default Navbar;