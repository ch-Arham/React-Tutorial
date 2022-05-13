import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "Random Message"
  });
  return (
    <React.Fragment>    
      <div>
        <h3>{person.name}</h3>
        <h3>{person.age}</h3>
        <h4>{person.message}</h4>
        <button type="button" className="btn" onClick={()=>{
          setPerson({...person, message: "Hello World"});
        }}>Change Message</button>
      </div>
    
        
    </React.Fragment>
  )
};

export default UseStateObject;
