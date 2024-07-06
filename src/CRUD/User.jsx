import React, { useEffect, useState } from 'react'
import style from "./Home.module.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {

    let[user,setUser]=useState([])

    let[reload,setReload]=useState(false)

    useEffect(()=>{

      axios.get("https://free-storage.vercel.app/api/empolyee")
      .then((response)=>{setUser(response.data)})
      .catch(()=>{console.log("Error")})
      setReload(false)
      },[reload])
      

    let deleteUser=(id)=>{
        axios.delete(`https://free-storage.vercel.app/api/empolyee/${id}`)
          .then(() => { setReload(true) });
    }

      return (

        <div id={style.Card}>

          {user.map((users)=>{
            
            return(
                <div className={style.Profile}>
                    <img src={""}></img>
                    <p className={style.ProfileName}>{users.empName}</p>
                    <p className={style.ProfileJob}>{users.empJobRole}</p>
                    <p className={style.ProfileInfo}> <span>{users.empName}</span> , an expert for a year in <span>{users.empJobRole} </span> earns a total salary of ${users.empSalary}  from <span><i>{users.empCompany}</i></span></ p>
                      <div>
                        <button className={style.edit1}>
                           <Link to={`/edituser/${users.id}`}>edit</Link></button>
                        <button className={style.edit2} onClick={()=>{deleteUser(users.id)}}>delete</button>
                      </div>
                </div>
                )
            })}
        </div>
  )
}

export default User
