import { Add, Remove } from '@mui/icons-material'

import React, { useState } from 'react'


const Question = ({ title, info }) => {
    const [ShowInfo, setShowInfo] = useState(false)
    return (
        <div className='question '>
            <header>
                <h4 className='text-2xl font-serif'>{title}</h4>
                <button className="btn" onClick={() => setShowInfo(!ShowInfo)}>{ShowInfo ? <Remove /> : <Add />}</button>
            </header>
            {ShowInfo && <p className='text-xl font-poppins'>{info}</p>}
        </div>
    )
}

export default Question