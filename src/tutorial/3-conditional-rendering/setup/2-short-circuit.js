import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <>
      {/* <h2>{firstValue}</h2>
      <h2>{secondValue}</h2> */}

      {/* {(text || <h1>Hello</h1>)} */}
      <h1>{text || "John Doe"}</h1> 
      <button className="btn" type="button" onClick={()=>setIsError(!isError)}>Toggle Error</button>
      <h2>{isError && "Error..."}</h2>
      {(isError) ? 
        (<p>There is an Error...</p>)
        :
        (<p>There is no Error...</p>)
      }
    </>
  )
};

export default ShortCircuit;
