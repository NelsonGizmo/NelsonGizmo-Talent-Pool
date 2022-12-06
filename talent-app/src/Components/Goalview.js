import React from 'react'

const Goalview = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: '200px',
        backgroundColor: 'aqua',
        borderRadius: 40,
        margin: 50,
    }

    const Childdiv = {
        height: '100%',
        width: `${progress(1)}80%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
    }
    
    const Childd = {
        height: '100%',
        width: `${progress(2)}30%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
    }
    const Childdv = {
        height: '100%',
        width: `${progress(3)}33.3%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
    }
    const Childiv = {
        height: '100%',
        width: `${progress(4)}50%`,
        backgroundColor: bgcolor,
        borderRadius: 40,
        textAlign: 'right',
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }


    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress(1)}/5`}</span>
            </div>
            <div style={Childd}>
            <span style={progresstext}>{`${progress(2)}/10`}</span>
                
            </div>
            <div style={Childdv}>
                <span style={progresstext}>{`${progress(3)}/3`}</span>
            </div>
            <div style={Childiv}>
                 <span style={progresstext}>{`${progress(4)}/2`}</span>
            </div>
        </div>
    )
}

export default Goalview ;