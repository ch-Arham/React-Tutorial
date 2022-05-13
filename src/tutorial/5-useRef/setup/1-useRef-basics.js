import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  useEffect(()=>{
    refContainer.current.focus();
    console.log(refContainer.current);
  });

  const handleSubmit = e =>{
    e.preventDefault();
    console.log(divContainer.current);
    console.log(refContainer.current.value);
  }
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" ref={refContainer}/> <br />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hello World</div>
    </>
  )
};

export default UseRefBasics;
