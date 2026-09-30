import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObject = {
    name: "chandan",
    age: 25
  }

  let newArr = [1, 3, 5, 4, 6]
  let price = 20

  return (
    <>
    <h1 className='bg-green-400 text-black p-5 rounded-xl mb-5'>Tailwind Test</h1>
   <Card username="chandanyadav" price={price}/>
   <Card username="hiteshchaudhary"/>
    </>
  )
}

export default App
