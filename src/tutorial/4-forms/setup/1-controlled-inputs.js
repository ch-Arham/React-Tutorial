import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName] = useState("");
  const [email,setEmail] = useState("");
  const [people,setPeople] = useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault(); //otherwise reload page
    if(firstName && email){
      const person = {id: new Date().getTime().toString(),firstName,email};
      //setPeople(people=>[...people,person]);
      setPeople([...people,person]);
      setFirstName("");
      setEmail("");
    }
  }

  const handleChangeName = e =>{
    setFirstName(e.target.value);
  }

  const removeItem = id =>{
    let newPeople = people.filter(person => person.id!==id);
    setPeople(newPeople);
  }
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName"
              value={firstName}
              onChange={handleChangeName}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="text" 
              id="email" 
              onChange={e=>setEmail(e.target.value)} 
              name="email" 
              value={email}/>
          </div>
          <button type="submit">add person</button>
        </form>
        {
          people.map(person=>{
            const {id,firstName:name,email}=person;
            return(
              <div className="item" key={id}>
                <h4>{name}</h4>
                <p>{email}</p>
                <button type="button" className="btn" style={{marginBottom: '30px'}}
                 onClick={()=>removeItem(id)}>Clear</button>
              </div>
            )
          })
        }
      </article>
    </>
  )
};

export default ControlledInputs;
