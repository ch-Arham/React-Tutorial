import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
    const [person,setPerson] = useState({firstName:"",email:"",age:""});
    const [people,setPeople] = useState([]);
    const handleChange = e =>{
      const name = e.target.name;
      const value = e.target.value;
      setPerson({...person, [name]:value});
    }

    const handleSubmit = e =>{
      e.preventDefault();
      const {firstName,email,age} = person;
      if(firstName && email && age){
        let newPerson = {...person, id: new Date().getTime().toString()};  
        setPeople([...people,newPerson]);
        setPerson({firstName:"",email:"",age:""});
      }
    }

    const removeItem = id =>{
      let newPeople=people.filter(person=>person.id!==id);      
      setPeople(newPeople);
    }
    
  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {
          people.map(person=>{
            const {firstName:name,email,age,id} = person;
            return (<div key={id} className="item">
              <h4>{name}</h4>
              <p>{email}</p>
              <p>{age}</p>
              <p style={{marginBottom:"30px"}}><button type="button" onClick={()=>removeItem(id)} className="btn">Clear</button></p>
            </div>)
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
