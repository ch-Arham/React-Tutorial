import React from 'react';

const ErrorExample = () => {
  let title="Random Title"; //random title is set up which is passed in h2
  const handleClick = ()=>{
    title = "Okay"; //title is changed but it is confined to the scope of this funciton only
    console.log("Helo World");
  }
  return (
    <> {/*react fragment*/}
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change Title</button>
  </>
  )
};

export default ErrorExample;
