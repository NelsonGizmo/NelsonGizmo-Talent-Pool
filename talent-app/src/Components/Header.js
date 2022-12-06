import React from 'react'
import Notification from "../Notification.svg";
import Employer from "../Employer.svg";
import Dropdownarrow from "../Dropdownarrow.svg";

const Header = () => {
  return (
    <div className='header'>
      <img src={Notification} alt='Notification' width={30} height={20}  />
      <div className='headerspn'> 
        <img src={Employer} alt='Employer' width={60} height={60}  /><h4>Adelanke Adeleke</h4>
      </div> 
      <img className='drop' src={Dropdownarrow} alt='Dropdownarrow' width={10} height={10}/>
    </div>
  )
}

export default Header