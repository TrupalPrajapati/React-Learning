import { useCallback, useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed ] = useState(false);
  const [charAllowed, setCharAllowed ] = useState(false);
  const [Password, setPassword ] = useState("");

  // Ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    if(numberAllowed){
      str = str + "1234567890";
    }

    if(charAllowed){
      str = str + "!@#$%^&*-_=+[]{};:'\|,`<.>/?";
    }

    for(let i=0; i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char);
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClip = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full h-48 mt-16 max-w-md mx-auto shadow-md rounded-lg text-gray-400 bg-zinc-800 text-xl text-center p-4'>Password Gnerator
        <div className='flex shadow p-6 rounded-lg overflow-hidden '>
          <input className='outline-none w-full rounded-md p-2 ' type="text" value={Password} placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClip} className=' hover:bg-blue-950 outline-none bg-blue-700 text-white ml-1 px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 ml-5'>
        <div className='flex items-center gap-x-1'>
          <input className='cursor-pointer' type="range" onChange={(e)=>{setLength(e.target.value)}} min={8} max={100} value={length}/><label >Length:{length}</label>
        </div>
        <div className='ml-2'>
          <input type="checkbox" defaultChecked={charAllowed} id="characterInput" onChange={()=>{setCharAllowed((prev)=> !prev)}} /><label htmlFor='CharacterInput'>Characters</label>
        </div>
        <div className='ml-2'>
          <input type="checkbox" defaultChecked={numberAllowed} name="" id="numberInput" onChange={()=>{setNumberAllowed((prev)=>!prev)}} /><label htmlFor='numberInput' >Numbers</label>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
