import React from "react";
import "./App.css";
import GateKeeper from './GateKeeper';
function App() {
  return (
    <div>
      <p>{new Date().toLocaleString()}</p>
      <GateKeeper />
    </div>
  );
}


export default App;
