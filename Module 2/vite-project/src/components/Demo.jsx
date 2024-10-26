import React from 'react'

function Demo (props) { //Can also use destructuring of object to pass props, check Greet.jsx
    return (
        <p>{props.name} speaking from Demo component!</p>
    )
}

export default Demo