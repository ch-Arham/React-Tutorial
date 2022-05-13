import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text,setText] = useState("random title");
  return( 
    <React.Fragment> 
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={()=>{
      if(text==="random title")
        setText("Hello World");
      else
        setText("random title");
    }}>Change Title</button>
    </React.Fragment>
  );
};

export default UseStateBasics;
