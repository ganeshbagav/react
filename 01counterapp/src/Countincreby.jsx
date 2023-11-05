import React from 'react'
import { useState } from "react";

function Countincreby() {

    let [count1, setCount1] = useState(0);

    const increaseCount = () => {
            /** 
            * Over here prevCount is call back function
            * which is getting values after updating it in the DOM
            *  
            */
            setCount1(prevCount=>prevCount+1)
            setCount1(prevCount=>prevCount+1)
            setCount1(prevCount=>prevCount+1)

    }
    function decreaseCount() {
        if(count1>0){
            setCount1(count1-1)
        }
    }
  return (
    <>
      <br />
      <p>+3 Incrementor </p>
      <p>Count : {count1}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <br />
      <br />
      <button onClick={decreaseCount}>Decrease Count</button>
    </>
  );
  
}

export default Countincreby