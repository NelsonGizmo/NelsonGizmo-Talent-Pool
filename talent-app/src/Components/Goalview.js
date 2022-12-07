import React, { Children } from 'react'

const Goalview = ({ bgcolor, progress }) => {

    //     const Parentdiv = {
    //         height: '100vh',
    //         width: '200px',
    //         backgroundColor: 'aqua',
    //         borderRadius: 40,
    //         margin: 50,
    //     }

    //     const Childdiv = {
    //         width: `${progress(1)}80%`,
    //         backgroundColor: bgcolor,
    //         borderRadius: 40,
    //         textAlign: 'right',
    //     }


    //     const progresstext = {
    //         padding: 10,
    //         color: 'black',
    //         fontWeight: 900
    //     }


    //     return (

    //         <div style={Parentdiv}>
    //             <div style={Childdiv}>
    //                 <span style={progresstext}>{`${progress(1)}/5`}</span>
    //             </div>
    //          </div>   
    //     )
    // 
}



const Progress_bar = ({ text, value, fraction}) => {
   
    return (
        <div className='progressbar'>
            <div>
            <p className='ptext'>{text}</p>
            </div>
            
            <div className='progress1' >
            <progress className='progress'  value={value} max="100"></progress>
            <span>{fraction}</span> 
            </div>
            
        </div>

    )
}

export default Progress_bar;