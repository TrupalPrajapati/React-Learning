import React from 'react';
import Chai from "./Chai"

function App() {

const username = "Chai | Code";

// This gives us error bcz there name of the key value pair are different than the actual React render expect
/* const reactElement = {
    type: "a",
    props : {
        href:"https://google.com",
        target:"blank"
    },
    children: "Click me to visit google"
}
*/

// This what the react render expected 
const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:"_blank"},
  'Click me to visit Google',
  // username
)


// we use this also
/*const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Link</a>
)
  */
 
  return (

    reactElement   //cunstom react

    // <>
    // <Chai/>
    // <h1>React with vite | Trupal parajapati</h1>
    // <h1>React by {username}</h1>
    // </>
    
  )
}

export default App
