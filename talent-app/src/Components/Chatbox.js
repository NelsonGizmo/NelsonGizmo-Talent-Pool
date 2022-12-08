import React from 'react'
import woman from "../woman.svg";
import pin from "../pin.svg";
import dots from "../dots.svg";
import chat from "../chat.svg";
import inputbox from "../inputbox.svg"



function Chatbox() {
    return (
        <>
            <div className='Adelekechat'>
                <div className='userchat'>
                    <h3><img src={woman} alt='woman' className='woman' />Adeleke Oluwakemi  <span className='pin'><img src={pin} alt='pin' /><img className='dots' src={dots} alt='dots' /></span></h3>

                </div>
                <div className='chatbox'>
                    <img src={chat} alt='chat' width={480} height={610} />
                    <div><img src={inputbox} alt='inputbox' width={480} height={90} /></div>
                </div>
            </div>
        </>
    )
}

export default Chatbox