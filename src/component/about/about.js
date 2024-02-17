import React,{useState} from "react";
import Navbar from "../../component/navbar/navbar";
import style from "./about.module.css";
import emailjs from '@emailjs/browser';
import axios from "axios";

const About=()=>{
 const [inputs,setinputs]=useState({});
 const [inputsErr,setinputsErr]=useState({});

 const service_id="service_n4pm4rq";
 const template_id="template_12345"
 
 const public_key="A0pkQPdtY4_BmpdE9"

const data={
    user_name:inputs.name,
    user_email:inputs.email,
    to_name:"abhishek",
    message:inputs.enquire_text
}; 

    const handlechange=(e)=>{
        const name=e.target.name
        const value=e.target.value
        if(name=="name" && value.length<4){
            setinputsErr({...inputsErr,["nameErr"]:"name should greater than 4 and not empty"}) ;  
           console.log("invalid input")
           return
        }
        if(name=="email" && value.length<4){
            setinputsErr({...inputsErr,["emailErr"]:"check your email and not empty"}) ;  
         
           return
        }
            setinputs((old)=>{
              return  {...old,[name]:value}
            })
    }


    const handlesubmit= async (e)=>{
        e.preventDefault();
        console.log(data)

        const mydata={
            service_id:service_id,
            template_id:template_id,
            user_id:public_key,
            template_params:{
                from_name:inputs?.name,
                from_email:inputs?.email,
                from_con:inputs?.mobile,
                to_name:"abhi",
                message:inputs?.enquire_text
            }
        }
         const response= await axios.post("https://api.emailjs.com/api/v1.0/email/send",mydata).then((data)=>console.log(data)).catch((err)=>{console.log(err)})
        
         console.log(response);
    }


    


    return(
        <>
        <h1 style={{textAlign:"center", color:"white"}}><i>Contact--Us</i></h1>
  
        <div className={style.main_container}>
            <div className={style.formabout_container}>
             <h2>Contact-us
             <hr style={{width:"91px"}}/></h2>
             <i>if you like my project<br/>contact me</i>

            </div >

            <div className={style.form_container}>
        
        <form  onSubmit={(e) => handlesubmit(e)}>
            <label for="name1">Name:-</label><br/>
            <input type="text" id="name1" name="name" onChange={handlechange}/> <br/>
            <label for="email1" name="email">Email:-</label><br/>
             <input type="email" name="email" id="email1" onChange={handlechange}/><br/>
             <label for="telno">mobile no.:-</label><br/>
            <input type="tel" id="telno" name="mobile" onChange={handlechange} /> <br/>
             <label for="writehere">Enquire:-</label><br/>
            <textarea className={style.enquire_text} type="text" name="enquire_text"  id="writehere" rows="5" placeholder="text here" onChange={handlechange} /> <br/>
            <input  type="submit" />
        </form>
        </div>
      
        </div>
        </>
    )
}

export default About;