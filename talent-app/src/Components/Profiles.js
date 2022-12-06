import React from 'react'
import employee from "../employee.svg";
import sidedrop from "../sidedrop.svg";

function Avatar(props) {
  return (
    <div className='employ'>
      <img src={employee} alt='employee' />
      <div className='textprops'>
        <b>{props.name}</b><br />
        {props.description}
      </div>
    </div>
  );
}

export default function Product() {
  return (
    <>
      <div className='product'>
        <div className='product1'>
          <h3>Pending Hire</h3>
          <div className='employee'>
            <Avatar
              name="Danny Smith"
              description="FrontEnd Developer"
            /><hr />
            <Avatar
              name="Seyi Onifade"
              description="NodeJS Developer"
            /><hr />
            <Avatar
              name="John Doe"
              description="Designer"
            /><br/>
            <p>see all pending hire<img src={sidedrop} alt='sidedrop' /></p>
          </div>
        </div>
        <div className='product1'>
          <h3>Recommended Interns</h3>
          <div className='employee'>
            <Avatar
              name="Danny Smith"
              description="FrontEnd Developer"
            /><hr />
            <Avatar
              name="Seyi Onifade"
              description="NodeJS Developer"
            /><hr />
            <Avatar
              name="John Doe"
              description="Designer"
            /><br />
            <p>see all Interns<img src={sidedrop} alt='sidedrop' /></p>
          </div>
        </div>
      </div>
    </>

  )
}