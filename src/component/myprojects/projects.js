import React from "react";
import style from "./projects.module.css";

const Projects = () => {
  return (
    <div>
      <div className={style.main}>
        <div className={style.leftside}>
          <img
            className={style.projectImg}
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"
          />
        </div>
        <div className={style.rightside}>
          <h2>E-Commerce Website</h2>
          <div className={style.projectcontent}>
            <i>
              it is E-Commerce websites. By combining React, Recoil, React
              Router DOM, and CSS, you can create a highly interactive and
              seamless shopping experience for users. You can leverage the
              component-based architecture of React to modularize your codebase,
              manage application state with Recoil, implement client-side
              routing with React Router DOM, and style your UI components using
              CSS to achieve a professional and polished look for your eCommerce
              website. Additionally, using these technologies can enhance
              developer productivity, maintainability, and performance of the
              application.
            </i>
          </div>
        </div>
      </div>
      <div className={style.main2}>
     
        <div className={style.rightside}>
          <h2>E-Commerce Website</h2>
          <div className={style.projectcontent}>
            <i>
              it is E-Commerce websites. By combining React, Recoil, React
              Router DOM, and CSS, you can create a highly interactive and
              seamless shopping experience for users. You can leverage the
              component-based architecture of React to modularize your codebase,
              manage application state with Recoil, implement client-side
              routing with React Router DOM, and style your UI components using
              CSS to achieve a professional and polished look for your eCommerce
              website. Additionally, using these technologies can enhance
              developer productivity, maintainability, and performance of the
              application.
            </i>
          </div>
        </div>
        <div className={style.leftside}>
          <img
            className={style.projectImg}
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_1280.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
