import React, { useState } from 'react';

function CssPractice() {
    let [cssProps, setCssProps] = useState({color:"black", backgroundColor:"white"})
    const setHeadingColor = (event) => {
        let { name, value } = event.target
        setCssProps({...cssProps, [name]:value})
    }
    return(
        <>
        <h1 style={cssProps}>Css</h1>
        <label>Text Color:</label><br/>
        <select onChange={setHeadingColor} name="color" value={cssProps.color}>
            <option>black</option>
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>yellow</option>
            <option>violet</option>
            <option>white</option>
        </select><br/>
        <label>Background:</label><br/>
        <select onChange={setHeadingColor} name="backgroundColor" value={cssProps.backgroundColor}>
            <option>black</option>
            <option>red</option>
            <option>green</option>
            <option>blue</option>
            <option>yellow</option>
            <option>violet</option>
            <option>white</option>
        </select>
        </>
    )
}

export default CssPractice;