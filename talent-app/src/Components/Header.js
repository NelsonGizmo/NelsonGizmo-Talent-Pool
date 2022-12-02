import React from 'react'
import Notification from "../Notification.svg";
import Employer from "../Employer.svg";
import Dropdownarrow from "../Dropdownarrow.svg";

const Header = () => {
  return (
    <div className='header'>
       <img src={Notification} alt='Notification' width={30} height={20}  /> <span className='headerspn'> <img src={Employer} alt='Employer' width={60} height={60}  /></span>Adelanke Adeleke<br/>Employer <img src={Dropdownarrow} alt='Dropdownarrow' width={10} height={10}/>
    </div>
  )
}

export default Header