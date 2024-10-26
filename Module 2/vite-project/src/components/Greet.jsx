import React from 'react'

function Greet({name, phone}) { //Using destructuring of object to pass props
    const product = (a,b) => {
        return a*b;
    }
  return (
    <div>
      <p>{name} greets you from the Greet component! {27+72}  {product(27,72)}</p> 
      <p>Phone number: {phone}</p>
      {/* Javascript Expressions can be written within {}  */}
    </div>
  )
}

export default Greet
