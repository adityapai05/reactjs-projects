import React from "react";
import Fruit from "./Fruit";

function Fruits() {
  const fruits = [
    { name: "Apple", price: 80 },
    { name: "Banana", price: 50 },
    { name: "Mango", price: 150 },
    { name: "Orange", price: 100 },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
          // <li key={fruit.name}>{fruit.name} - {fruit.price}</li> //Keys are used to uniquely identify each record in a dictionary or array
        <Fruit name={fruit.name} price={fruit.price}/>
      ))}
    </div>
  );
}

export default Fruits;
