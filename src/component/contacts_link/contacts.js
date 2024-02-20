import React from 'react'
import style from "./contacts.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


const Contacts = () => {
  return (
    <div>
        <div className={style.main}>
        
            <div>
            
                <a href='https://www.linkedin.com/in/abhishek-raj-gaurav-403678196/' target="_blank" style={{textDecoration:"none"}} >  <LinkedInIcon sx={{fontSize:"2rem"}}/>  </a>
            </div>
            <div>
            
           <a href="https://github.com/abhishekcoder007"  target="_blank" style={{textDecoration:"none"}}> <GitHubIcon sx={{fontSize:"2rem"}}/></a>
    </div>
        </div>
      
    </div>
  )
}

export default Contacts
