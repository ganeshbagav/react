import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password , setPassword] = useState('')
  const generatePassword = () =>{
    console.log('generate');
    let pass=''
    const str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890"
    for(let i=0 ; i<length ; i++){
      let r = Math.floor(Math.random()* str.length + 1)
      pass+=str[r]
    }
    setPassword(pass)
  }

  useEffect(() => {
    generatePassword()
  }, [length])
  
  return (
    <>
      <div className=' flex flex-col '>
        <input type="text" className=' p-2  rounded-xl m-3 text-lg'readOnly  style={{backgroundColor:'white', color:'black'}} value={password}/>
        <button onClick={generatePassword}>refresh</button>
        <br />
        <input type="range" min={8} max={25} value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}/>
         <p>Length:{length}</p>
      </div>
    </>
  )
}

export default App
