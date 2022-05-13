import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const decrease = val => {
    setCounter(val-1);
  }
  const increase = val => {
    val++;
    setCounter(val);
  }

  const delayed = () =>{
    setTimeout(()=>{
      setCounter(preVal=>{
        return preVal+1;
      });
    },2000);
  }
  
  return (
  <>
    <h2>Regular Counter</h2>
    <h1>{counter}</h1>
    <button type="button" className="btn" onClick={()=>decrease(counter)}>Decrease</button>
    <button type="button" className="btn" onClick={()=>setCounter(0)}>Reset</button>
    <button type="button" className="btn" onClick={()=>{increase(counter)}}>Increase</button>
    <br /><br />
    <h2>More Complex Example</h2>
    <h1>{counter}</h1>
    <button type="btn" className="btn" onClick={()=>{delayed()}}>Increase Later</button>
  </>
  );
};

export default UseStateCounter;
