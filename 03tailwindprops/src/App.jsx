
import './App.css'
import Card from './Components/Card'

function App() {

  let myObj = {
    name: "Trupal",
    age: 21
  }

  let arr = [1,2,3,4,5];

  return (
    <>
     <h1 className='text-blue-50 bg-gray-700 rounded-lg p-10 mb-4'>Tailwind Test</h1>
    <Card username="Trupal" someObject = {myObj }/>
    <Card username="Jay" newArray = {arr}/>
    <Card username="Meet"/>
    </>
  )
}

export default App
