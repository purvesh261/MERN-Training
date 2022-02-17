import React, { useState } from 'react'
import DisplayDetails from './DisplayDetails';

export default function Display() {
    const [value1, setValue1] = useState();
    const onUpdate = (val1) => {
        console.log("onupdate at Display", val1);
        setValue1(val1);
    }

    return (
        <>
        <DisplayDetails onUpdate={onUpdate} />
        <h3>Value: {value1}</h3>
        </>
    )
}
