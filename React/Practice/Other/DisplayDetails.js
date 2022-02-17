import React from 'react'

export default function DisplayDetails(props) {
    const onDispDetailsUpdate = () => {
        const myValue = 5
        props.onUpdate(myValue)
    }
    return (
        <>
            <h2>Display Details</h2>
            <button className='btn btn-primary' onClick={onDispDetailsUpdate} >Click</button>
        </>
        
    )
}
