import React,{useState} from 'react'
import './App.css'

function App() {

const [counter, setCounter] = useState(15);



  // let counter = 5;

  const addValue =()=>{ 

    // Work like a bunch (one task is complete and other are ignore as all are same task)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    // Work like a bunch but there are two different task so both tasks are run and then give us the o/p
    // setCounter(counter + 1)
    // setCounter(counter + 2)

    // Work like promises (all task are complete and then give the result )
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)

  }

 const subtractValue = () => {
  if(counter <= 0 ){
    setCounter(0);
  }
  else{
    setCounter(counter - 1)
  }
 }

  return (
    <>
     <h1>Chai | React</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value</button><br />
     <button onClick={subtractValue}>Subtract value</button>
     <h4>{counter}</h4>
    </>
  )
}

export default App
