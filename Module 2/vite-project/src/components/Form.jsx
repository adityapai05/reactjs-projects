import React, {useState} from 'react'

function Form() {
    const [text, setText] = useState('Demo D');
    const [name, setName] = useState({firstName: 'Demoder', lastName: 'Devanand'});
    // function handleChange(e) { //e stands for event object
    //     setText(e.target.value);
    //     console.log(e);
    // } // Not recommended to use a separate function

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
      <input type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
    <p>Text in input field will appear here:<br/>{text}</p>
      <br/>

       {/* ... is referred to as spread operator */}
      <input type='text' value={name.firstName} onChange={(e) => setName({...name, firstName:e.target.value})}></input>
      <input type='text' value={name.lastName} onChange={(e) => setName({...name, lastName:e.target.value})}></input>
        <p>{name.firstName} {name.lastName}</p>
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </div>
  )
}

export default Form
