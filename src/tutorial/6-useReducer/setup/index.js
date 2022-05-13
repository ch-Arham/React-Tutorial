import React, { useState, useReducer, useRef, useEffect } from 'react';
import Modal from './Modal';
//import { data } from '../../../data';
import {reducer} from './reducer';

const defaultState = {
  people:[],
  isModalOpen:false,
  modalContent:''
}

const Index = () => {
  const [name,setName] = useState("");
  const [state,dispatch] = useReducer(reducer,defaultState);
  const refContainer = useRef(null);

  useEffect(() => {
    refContainer.current.focus();
  })

  const handleSubmit = e =>{
    e.preventDefault();
    if(name){
      const newPerson = {id: new Date().getTime().toString(), name};
      dispatch({type:"ADD_ITEM",payload:newPerson,name:name});
      setName("");
    }else{
      dispatch({type:"NO_VALUE"});
    }
  }

  const modalClose = ()=>{
    dispatch({type:"CLOSE_MODAL"});
  }

  return (
    <>
      {(state.isModalOpen && <Modal modalClose={modalClose} modalContent={state.modalContent}/>)}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
          ref={refContainer}
           type="name" 
           value={name}
           onChange={e=>setName(e.target.value)}
           />
        </div>
        <button type="submit">Add</button>
      </form>
      {state.people.map(person=>{
        const {id,name} = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={()=>dispatch({type:"REMOVE_ITEM", payload:id,name:name})}>Clear</button>
          </div>
        )
      })}
    </>
  )
};

export default Index;
