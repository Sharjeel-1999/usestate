import React, { useState } from 'react';
import './App.css';

function App() {
  
  let [names, setName] = useState("x")
  const updatesname = () => {
    var updatename = prompt("ENter val")
    setName(updatename)
  }
  return (
    <>
      <h1>Hello World</h1>
      <h2>{names}</h2>
      <button onClick={() => { 
        updatesname() 
        // setName(names-5)
                 }}>Update button</button>

    </>
  );

}

export default App;
