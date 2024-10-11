import './App.css'
import {useState} from 'react'

function App() {

const [color, setColor] = useState('black');




  return (
    <>
      <div className='w-screen h-screen' style={{backgroundColor: color}}>
        <div className=' flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <button style={{backgroundColor: "green"}} onClick={()=> setColor("green")} className='px-5 shadow-lg   rounded-md m-2 outline-none' > Green </button>
        <button style={{backgroundColor: "blue"}} onClick={()=> setColor("blue")} className='px-5 shadow-lg   rounded-md m-2 outline-none' > Blue </button>
        <button style={{backgroundColor: "red"}} onClick={()=> setColor("red")} className='px-5 shadow-lg  rounded-md m-2 outline-none'> Red </button>
        <button style={{backgroundColor: "yellow"}} onClick={()=> setColor("yellow")} className='px-5 shadow-lg   rounded-md m-2 outline-none'> Yellow </button>
        <button style={{backgroundColor: "gray"}} onClick={()=> setColor("gray")} className='px-5 shadow-lg   rounded-md m-2 outline-none' > Gray </button>
        <button style={{backgroundColor: "black"}} onClick={()=> setColor("black")} className='px-5 shadow-lg   rounded-md m-2 outline-none' > Black </button>
        <button style={{backgroundColor: "purple"}} onClick={()=> setColor("purple")} className='px-5 shadow-lg   rounded-md m-2 outline-none'> purple </button>
        </div>
      </div>
    </>
  )
}

export default App



