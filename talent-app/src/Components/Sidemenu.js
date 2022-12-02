import React from 'react'
import infinte from "../infinte.svg";

const Sidemenu = () => {
  return (
    <div className='sidebar'>
        <h2>TalentP<img src={infinte} alt='infinte' />l</h2><hr/>
        <p>Dashboard</p><br/>
        <p>Messages</p><br/>
        <p>Employees</p><br/>
        <p>Add a Team</p><br/>
        <p>Support</p><br/>
        <p>Settings</p><br/>
       

    </div>
  )
}

export default Sidemenu