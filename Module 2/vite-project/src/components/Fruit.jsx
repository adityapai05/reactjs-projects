import React from 'react'

function Fruit({name, price}) {
  return (
    <div>
      <li key={name}>The price of {name} is {price}rs</li>
      {/* Conditional Rendering: */}
      <li>{price > 100 ? <p>The price of {name} is {price}rs</p> : ""}</li>
    </div>
  )
}

export default Fruit
