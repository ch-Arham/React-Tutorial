import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size,setSize] = useState(window.innerWidth);
  
  const checkSize = (a) =>{
    setSize(window.innerWidth);
    console.log(a);
  }
  /*the checkSize fucntion will have to be passed as just a name/reference but if we
  have to pass in a value, then we cannot simply say checkSize(1). What we can do is
  put it inside of an anonymous function and then it will work normally*/
  useEffect(()=>{
    window.addEventListener("resize", ()=>checkSize(1));
    return ()=>{
      window.removeEventListener("resize", ()=>checkSize(1));
      
    }
  });
  console.log("Component");
  return (
    <>
      <div>
      <h1>Window</h1>
      <h2>{size}px</h2>
      </div>
    </>
  )
};

export default UseEffectCleanup;
