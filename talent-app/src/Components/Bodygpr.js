import React from 'react'
import sidedrop from "../sidedrop.svg";
import Product from './Profiles';
import Avatar from './Profiles';

function Bodygpr() {
  return (
    <div className='bodyg'>
      <div className='goal'>
        <h3>Goal Remainder</h3>
        <div className='bog'>
          <b>Technical Product Manager</b><br/>
          <span className='ptag'>PM 3</span><hr />
          <b>User Experience Designer</b><br/>
          <span className='ptag'>Design 8</span><br/><br/><hr />
          <b>NodeJs, Laravel Developer</b><br/>
          <span className='ptag'>BACKEND 1</span><br/><br/>
          <p>see all hire goal <img src={sidedrop} alt='sidedrope' /></p>
        </div>
      </div>
      <div>
        <Product>
          <Avatar />
          <Avatar />
          <Avatar />
        </Product>
      </div>

      
      



    </div>
  )
}

export default Bodygpr