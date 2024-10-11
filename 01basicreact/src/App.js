import React from 'react'
// import chain from './Chai';         //gives error bcz starts with small letter
import Chai from './Chai'

const App = () => {
  return (
    <div>
        <Chai/>
        <div> 
            <h1>1.Project Setup:</h1>
            <h3>To create a React project, use npx create-react-app project-name. This command sets up everything needed to start building with React.
             After setup, navigate to your project folder and start the development server using npm start. The project will run locally on http://localhost:3000.</h3>
         </div>
         <div> 
            <h1>2.Understanding React File Structure:</h1>
            <h3>public/: Contains static files like index.html which is the single HTML file served by React.
            src/: Contains JavaScript files where you write your React components. Key files include:
            App.js: The main component that renders your application.
            index.js: The entry point that connects React to the index.html file.</h3>
         </div>
         <div> 
            <h1>3.Cleaning Unnecessary Files:</h1>
            <h3>When starting a new project, remove unneeded files like logo.svg or App.test.js to keep the project simple and clean.
            Only keep files that are essential to the project to reduce complexity.</h3>
         </div>
           
         <div> 
            <h1>4.Using Git for Version Control:</h1>
            <h3>Initialize Git with git init and use git add . and git commit -m "message" to save your changes.
            Push your project to GitHub to store your code online for backup and collaboration.</h3>
         </div>
         <div> 
            <h1>5.Building and Deploying:</h1>
            <h3> When your project is ready for production, run npm run build. This command creates a build/ folder with optimized files.
            Deploy the build/ folder to any hosting service like Netlify or Vercel to make your project live.</h3>
         </div> 
    </div>
  )
}

export default App