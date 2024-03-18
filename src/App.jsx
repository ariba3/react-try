import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import ToDo from './ToDo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'

function App() {
  // const [count, setCount] = useState(0)

  const actors =['sakib','jasim','bapparaj','salmansha']
  const singers =[
    {
      name: 'dr. mahfuz', age: 38
    },
    {
      name: 'Shuvo', age: 34
    },
    {
      name: 'Pritom', age: 28
    },
  ]

  const books=[]

  return (
    <>
      
      <h1>Vite + React</h1>
      

      {/* <Singer ></Singer> */}
      {
        singers.map(singer=> <Singer singer={singer}></Singer>)
      }

      <Actor name={""}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor> )
      }
      
      <Person></Person>

      <Student></Student>
      <Devoloper></Devoloper>
      <NextStyle></NextStyle>
      <ToDo task="learn react" isDone={true}></ToDo>
      <ToDo task="explore more"></ToDo>

    </>
  )
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: 'sadia' }
  return <h3>I am a {person.name} with: {age + money} have {money}</h3>
}
function Student() {
  const name = 'trina'
  return (
    <div className='student'>
      <h3>This is student</h3>
      <p>Name: {name}</p>

    </div>
  )
}
function Devoloper() {
  const devoloperStyle = {
    fontSize: '30px',
    backgroundColor: 'red',
    color: 'white',
    padding: '0px',
    margin: '10px'
  }
  return (
    <div className='student' style={devoloperStyle}>
      <h3>This is Devoloper</h3>
      <p>This is Devoloper</p>
      {/* <p>Name: {name}</p> */}

    </div>
  )
}
function NextStyle() {

  return (
    <div style={{
      fontSize: '30px',
      backgroundColor: 'red',
      color: 'white',
      padding: '0px',
      margin: '10px'
    }}>
      <h3>This is Devoloper</h3>
      <p>This is Devoloper</p>
      {/* <p>Name: {name}</p> */}

    </div>
  )
}

export default App
