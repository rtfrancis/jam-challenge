//Import the React and ReactDom libraries
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
//Create a react component
// const App = function(){
//     return <div>Hi there, Ryan!</div>;
// };

//Take react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector("#root")
)
