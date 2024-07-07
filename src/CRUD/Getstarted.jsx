import style from "./Home.module.css"
import React from 'react'

const Getstarted = () => {
  return (
    <div id={style.feature}>
    <p><span>Our system allows you to easily manage your employees by performing various operations on a database of employees.<br/><br></br></span> 
        <span><u>Create</u>:</span>  You can add new employees to the database by filling out the form with their information, such as name, company, salary, and job title. Once you submit the form, the new employee will be added to the database and displayed in the table.<br/>

        <span><u>Read</u>: </span>  You can view all the employees in the database by looking at the table. The table displays the employee ID, name, company, salary, and job title. You can also search for a specific employee by using the search bar.<br/>

        <span><u>Update</u>:</span>  You can update an employee's information by clicking on the "Edit" button in the table. This will bring up a form with the employee's current information, where you can make any necessary changes. Once you submit the form, the employee's information will be updated in the database and displayed in the table.<br/>

        <span><u>Delete</u>:</span> You can delete an employee from the database by clicking on the "Delete" button in the table. This will remove the employee from the database and the table.<br/>

        Our system is built using the latest technologies such as ReactJS, JavaScript, CSS, and HTML. We also use a separate database to store the employee information, and the CRUD operations are handled by the server-side code.<br/>

        We hope you find our Employee Management System easy to use and helpful in managing your employees. If you have any questions or feedback, please don't hesitate to contact us.<br/>

        Thank you for choosing our Employee Management System!</p>
  </div>
  )
}

export default Getstarted
