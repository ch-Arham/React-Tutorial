import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people,setPeople] = React.useState(data);
 
  const removeItem = id =>{
    let newPerson=people.filter(person => person.id!==id);
    setPeople(newPerson);
  }
  
  return (
    <>
      {
        people.map(person =>{
          const {id,name} = person;
          return(
            <div className="item" key={id}>
              <h4>{name}</h4>
              <button type="button" className="btn" onClick={()=>{removeItem(id)}}>remove</button>
            </div>
          )
        })
      }
      <button type="button" className="btn" onClick={()=>{setPeople([])}}>Clear Items</button>
    </>
  )
};

export default UseStateArray;
