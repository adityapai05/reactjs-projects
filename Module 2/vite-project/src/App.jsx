import Demo from './components/Demo'
import Greet from './components/Greet'
import Animals from './components/Animals'
import Fruits from './components/Fruits'
import Message from './components/Message'
import Counter from './components/Counter'
import Form from './components/Form'
function App() {
  return (
    <>
    <h3>Passing props to Demo and Greet Components:</h3>
      <Demo name='Demo D'/>
      <Demo name='Bansee'/>
      <Demo name='Adidas'/>
      <Greet name='Smoothie' phone = '9833995529'/>
      <h3>Rendering an array:</h3>
      <Animals/>
      <h3>Rendering an array of objects:</h3>
      <Fruits/>
      <h3>Handling Event onClick in React</h3>
      <Message/>
      <h3>Using useState to change state of counter without refreshing:</h3>
      <Counter/>
      <h3>Handling Input Elements in React</h3>
      <Form/>
    </>
  )
}

export default App
