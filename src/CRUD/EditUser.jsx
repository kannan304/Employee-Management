import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const EditUser = () => {

    let userId=useParams()

    let navigate=useNavigate()

    let [name,setName]=useState("")
    let [salary,setSalary]=useState("")
    let [job,setJob]=useState("")
    let [company,setCompany]=useState("")

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

    let formhandle=(e)=>{
      e.preventDefault()
      let payload={
        empName:name,
        empSalary:salary,
        empJobRole:job,
        empCompany:company
      }
      axios.put(`https://free-storage.vercel.app/api/empolyee/${userId.id}`, payload)
  .then(() => { console.log("Updated Done") });

      navigate("/user")
    }


    useEffect(()=>{
        axios.get(`https://free-storage.vercel.app/api/empolyee/${userId.id}`)
          .then((response) => {
            setName(response.data.empName);
            setSalary(response.data.empSalary);
            setCompany(response.data.empCompany);
            setJob(response.data.empJobRole);
              })
          .catch(() => {
            console.log("Something went wrong ...");
          });
    },[])

 return (
    <section id={style.formm}>
    <div id={style.Form}>
      <form>
        <p id={style.heading}>Employee  Detail</p>
        <div id={style.line}></div>
        <table>
          <tr className={style.name}>
            <th><label>Name</label></th>
            <td>:  <input type="text" value={name} onChange={getName}></input></td>
          </tr>
          <tr className={style.salary}>
            <th><label>Salary</label></th>
            <td>:  <input type="text" value={salary} onChange={getSalary}></input></td>
          </tr>
          <tr className={style.jobrole}>
            <th><label>Job Role</label></th>
            <td>:  <input type="text" value={job} onChange={getJob}></input></td>
          </tr>
          <tr className={style.company}>
            <th><label>Company</label></th>
            <td>:  <input type="text" value={company} onChange={getCompany}></input></td>
          </tr>
          {/* <tr className={style.image}>
            <th><label>Upload Image</label></th>
            <td> : <input type="file"></input></td>
          </tr> */}
        </table>
          <button type="submit" id={style.but} onClick={formhandle}>Update</button>
      </form>
 
  </div>
    
 </section>   
  )
}

export default EditUser
