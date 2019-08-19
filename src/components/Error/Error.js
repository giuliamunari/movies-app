import React from 'react'

export default function Error(props) {
    const { text, status } = props.error
    return (
        <div className='errorComponent'>
            {status && <h2>{status}</h2>}
            {text && <h3>{text}</h3>}
        </div>
    )
}
