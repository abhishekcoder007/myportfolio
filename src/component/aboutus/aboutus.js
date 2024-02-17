import React from 'react';
import style from "./aboutus.module.css";

const Aboutus = () => {
  return (
    <div>
    <div className={style.main}>
        <div className={style.leftsection}>
            <div className={style.myname}>
                Abhishek Raj Gaurav
            </div>
            <p className={style.intro_text} id="216:162">Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
{/* <div className={style.intro_button}> */}
   <button className={style.intro_button} >click here ...</button>
{/* </div> */}
        </div>
        <div className={style.rightsection}>
            <div className={style.rightimg}>
            <img className={style.studimg} src="https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474_1280.jpg"/>
            </div>
        <img src=""/>
        </div>
    </div>
      
    </div>
  )
}

export default Aboutus
