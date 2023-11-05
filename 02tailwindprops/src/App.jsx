import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 rounded-2xl p-5 '>Tailwind Demo</h1>
      <br />
      <Card username='Ganesh'btnText='helo' link='https://images.pexels.com/photos/4805/hiking-path-way.jpg?auto=compress&cs=tinysrgb&w=400&lazy=load'/>
      <br />
      <Card username='May' btnText='get it'/>
    </>
  )
}

export default App
