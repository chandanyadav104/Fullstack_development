import { useState } from "react"

function App() {

  let [counter, setCounter] = useState(10)

  function addValue(){
  
    if(counter == 20){
      return
    }

    setCounter(counter + 1)
    console.log("Clicked: " , counter + 1)
  }

  function removeValue(){
   
    if(counter == 0){
      return
    }

    setCounter(counter - 1)
    console.log("Clicked: " , counter - 1)
  }

  return (
    <>
    <h1>Smart Counter</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value : {counter}</button>
    <button onClick={removeValue}>Remove Value: {counter}</button>
    <h3>Footer: {counter}</h3>
    </>
  )
}

export default App
