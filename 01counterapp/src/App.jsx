import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";



function App() {
    let [count, setCount] = useState(0);

    const increaseCount = () => {
        if(count<20){

          /**
           * even if there are multiple calls of setCount 
           * react make the update calls in bundles
           * because of its diffing( differentiating) algorithm called a React Fiber
           * where react sees that setCount is making same changes or 
           * updating DOM frequently thats why it make the call only once 
           * instead of making again and again
           * (More in CountIncreBy4.jsx )
           */
            setCount(count+1)
            setCount(count+1)
            setCount(count+1)
            setCount(count+1)
        }
    }
    function decreaseCount() {
        if(count>0){
            setCount(--count)
        }
    }
  return (
    <>
      <p>Count : {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
      <br />
      <p>ewew</p>
      {/* <Countincreby/> */}
    </>
  );
}

export default App;
