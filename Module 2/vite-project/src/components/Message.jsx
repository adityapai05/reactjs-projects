import React from 'react'

function Message() {
    const printSurprise = () => {
        console.log('DEMO D IN THE BUILDING!')
    }
  return (
    <div>
      <button onClick={printSurprise}>Click me for a surprise in console!</button>
    </div>
  )
}

export default Message
