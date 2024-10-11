function customRender(reactElement, container){
     /*
    const domElement = document.createElement(reactElement.type)
     domElement.innerHTML = reactElement.children
     domElement.setAttribute('href',reactElement.props.href)
     domElement.setAttribute('target',reactElement.props.target)

     container.appendChild(domElement);
     */

    const domElement =  document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if(prop == 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop]);
    }
    container.appendChild(domElement);

    /* const reactElement = {
        // This gives us error bcz there name of the key value pair are different than the actual React render expect
    type: "a",
    props : {
        href:"https://google.com",
        target:"blank"
    },
    children: "Click me to visit google"
    }
    */


    // This what the react render expected 
    /*const reactElement = React.createElement(

      'a',
      {href:"https://google.com", target:"_blank"},
      'Click me to visit Google'
    )*/

      
    // we use this also
    /*const anotherElement = (

      <a href="https://google.com" target="_blank">Visit Link</a>
    )
      */
}

const reactElement = {
    type: "a",
    props : {
        href:"https://google.com",
        target:"blank"
    },
    children: "Click me to visit google"
}
const mainContainer = document.querySelector('#root');

customRender(reactElement, mainContainer);








