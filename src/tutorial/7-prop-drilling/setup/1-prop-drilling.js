import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople] = useState(data);
  const removePerson = id =>{
    setPeople(people => people.filter(person => person.id!==id));
  }
  return (
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </section>
  )
};

const List = ({people,removePerson}) =>{
  return (
    <>
      {
        people.map(person=>{
          const {id} = person;
          return <SinglePerson key={id} {...person} removePerson={removePerson}/>
        })
      }
    </>
  )
}

const SinglePerson = ({id,name,removePerson}) =>{
  return (
    <div className="item">
      <h4>{name}</h4>
      <button type="button" onClick={()=>removePerson(id)}>clear</button>
    </div>
  )
}
export default PropDrilling;
