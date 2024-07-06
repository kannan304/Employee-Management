import React from 'react'
import style from "./Home.module.css"
import { useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreateUser = () => {

  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [job,setJob]=useState("")
  let [company,setCompany]=useState("")
  let [image,setImage]=useState("")

  let getName=(e)=>{
      setName(e.target.value)
  }
  let getSalary=(e)=>{
    setSalary(e.target.value)
  }
  let getJob=(e)=>{
    setJob(e.target.value)
  }
  let getCompany=(e)=>{
    setCompany(e.target.value)
  }
  let getImage=(e)=>{
    setImage(e.target.value)
  }
  

  let navigate=useNavigate()

  let formhandling=(e)=>{
    e.preventDefault()
    // console.log(`Name: ${name} Salary: ${salary} Job Role: ${job} Company: ${company}`)
    let user={
      empName:name,
      empSalary:salary,
      empJobRole:job,
      empCompany:company,
      empImage:image
    }
    axios.post("https://free-storage.vercel.app/api/empolyee",user)
    .then(()=>{console.log("Info Updated")})
    .catch(()=>{console.log("Try again later")})

    navigate("/user")
}
  return (
    <section id={style.formm}>
      <div id={style.Form}>
        <form>
          <p id={style.heading}>Employee  Detail</p>
          <div id={style.line}></div>
          <table>
            <tr className={style.name}>
              <th><label>Name</label></th>
              <td>:  <input type="text" placeholder="  Enter your First name & Last name" value={name} onChange={getName}></input></td>
            </tr>
            <tr className={style.salary}>
              <th><label>Salary</label></th>
              <td>:  <input type="text"  placeholder="   Enter your salary in digits" value={salary} onChange={getSalary}></input></td>
            </tr>
            <tr className={style.jobrole}>
              <th><label>Job Role</label></th>
              <td>:  <input type="text"  placeholder="   Enter your Job Role" value={job} onChange={getJob}></input></td>
            </tr>
            <tr className={style.company}>
              <th><label>Company</label></th>
              <td>:  <input type="text"  placeholder="   Enter your company name" value={company} onChange={getCompany}></input></td>
            </tr>
            {/* <tr className={style.image}>
              <th><label>Upload Image</label></th>
              <td> : <input type="file" value={image} onChange={getImage}></input></td>
            </tr> */}
          </table>
          <div id={style.Divbut}>
            <button type="submit" id={style.but} onClick={formhandling}>SUBMIT</button>
          </div>
        </form>
  
    </div>
      
   </section>   
    
  )
}

export default CreateUser
