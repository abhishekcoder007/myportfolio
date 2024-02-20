import React from "react";
import style from "./skill.module.css";

const Skill = () => {
  const data = [
    { name: "html", percent: "95%" },
    { name: "css", percent: "89%" },
    { name: "javascript", percent: "91%" },
    { name: "react", percent: "91%" },
    { name: "react-router-dom", percent: "91%" },
    { name: "redux", percent: "91%" },
    { name: "recoil", percent: "91%" },
    { name: "node", percent: "91%" },
    { name: "expressjs", percent: "91%" },
    { name: "mongodb", percent: "91%" },
    { name: "sql", percent: "91%" },
    { name: "mysql", percent: "91%" },
   
  ];
  return (
    <div className={style.mainbox}>
      
       <div className={style.mainheadingskill}> <div> MySkill</div></div>
   
      
        <div className={style.leftsideitems}>
          {data.map((ele) => (
            <div className={style.itemcontainer}>
              <span className={style.myskill}>{ele?.name}</span>
              <span className={style.myskillpercentage}>{ele?.percent}</span>
              <div className={style.mainbar1}>
              
                <div
                  style={{ width: ele.percent }}
                  className={style.mainbar}
                >    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Skill;
