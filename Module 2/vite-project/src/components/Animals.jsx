import React from "react";

function Animals() {
  let animals = ["Lion", "Tiger", "Cheetah", "Leopard", "Jaguar"];
  return (
    <>
      <p>Directly printing an array: {animals}</p>
      <p>Printing each element of array using map():</p>
      {animals.map((animal) => (
        <p key={animal}>{animal}</p>
      ))}
      <p>
        Printing each element of array as a list element in unordered list
      </p>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
}

export default Animals;
