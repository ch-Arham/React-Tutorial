import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
  //useState
  const [value,setValue] = useState(0);

  //useEffect
  useEffect(() => {
    console.log("2Render useEffect");
    if(value>0)
      document.title = `New Messages(${value})`;
  },[value]);

  useEffect(()=>{
    console.log("3Will run on the initial render only")
  },[]);

  console.log("1Render Component")
  
  return (
    <>
      <div>
        <h1>{value}</h1>
        <button className="btn" type="button" onClick={()=>setValue(value+1)}>Click Me</button>
      </div>
    </>
  ) 
    
};

export default UseEffectBasics;
