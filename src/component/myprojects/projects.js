import React from "react";
import style from "./projects.module.css";
import samplepdf from "../../data/Abhishek-Raj-Gaurav-FlowCV-Resume-20240116.pdf";
import img1 from "../../data/React App - Google Chrome 20-02-2024 02_04_04.png";
import img2 from "../../data/React App - Google Chrome 20-02-2024 02_14_21.png";

const Projects = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.leftside}>
          <img className={style.projectImg} src={img2} />
        </div>
        <div className={style.rightside}>
          <h2>E-Commerce Website</h2>
          <div className={style.projectcontent}>
            <p className={style.tehstack}>
              <b className={style.tehstackhead}>Tech-Stack:-</b>
              <span>
                {" "}
                Html Css Css-Animation React, Recoil, React Router DOM, and npm
                package like multi--carousel{" "}
              </span>
            </p>
            <p className={style.techlink}>
              <b className={style.techdetails}>Link:--</b>
              <a
                href="https://menzhub.netlify.app/"
                style={{
                  textDecoration: "none",
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "blue",
                }}
                download
              >
                Menz-Hub
              </a>
            </p>

            <p>
              <b className={style.techdetails}>Details:-</b>

              <i style={{fontSize:"1.5rem"}}>
                it is E-Commerce websites. By combining React, Recoil, React
                Router DOM, and CSS, you can create a highly interactive and
                seamless shopping experience for users. You can leverage the
                component-based architecture of React to modularize your
                codebase, manage application state with Recoil, implement
                client-side routing with React Router DOM, and style your UI
                components using CSS to achieve a professional and polished look
                for your eCommerce website. Additionally, using these
                technologies can enhance developer productivity,
                maintainability, and performance of the application.
              </i>
            </p>
          </div>
        </div>
      </div>

      <div className={style.main2}>
        <div className={style.rightside}>
          <h2>My--Portfolio</h2>
          <div className={style.projectcontent}>
            <p className={style.tehstack}>
              <b className={style.tehstackhead}>Tech-Stack:-</b>
              <span>
                {" "}
                Html Css Css-Animation React, Recoil, React Router DOM, and npm
                package like email.js for contact-us
              </span>
            </p>
            <p>
              <b className={style.tehstackhead}>Link:--</b>
              <a
                href="https://myportfolio-rust-nine.vercel.app/"
                style={{
                  textDecoration: "none",
                  fontFamily: "cursive",
                  fontSize: "2rem",
                  color: "blue",
                }}
              >
                My-Portfolio
              </a>
            </p>
            <p>
              <b className={style.techdetails}>Details:-</b>
              <i style={{fontSize:"1.5rem"}}>
                Welcome to my portfolio! Here, I showcase my projects and skills
                in web development using a variety of technologies. From
                front-end design to back-end functionality, I strive to create
                engaging and user-friendly experiences.
              </i>
            </p>
          </div>
        </div>
        <div className={style.leftside}>
          <img className={style.projectImg} src={img1} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
