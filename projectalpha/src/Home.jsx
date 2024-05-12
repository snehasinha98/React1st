import React from "react";
import { useState } from "react";

function Home() {
  const [Control, SetControl] = useState(0);
  function Increment() {
    console.log("increment runed");
    SetControl(Control + 1);
  }
  function Decrement() {
    SetControl(Control - 1);
  }

  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <p>Count: {Control}</p>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
export default Home;
