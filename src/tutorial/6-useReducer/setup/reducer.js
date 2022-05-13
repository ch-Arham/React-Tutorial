// reducer function
export const reducer = (state,action) =>{
    if(action.type==="ADD_ITEM"){
      return {
        ...state,
        people: [...state.people,action.payload],
        isModalOpen:true,
        modalContent:`${action.name} has been Added`
      }
    }
    else if(action.type === "CLOSE_MODAL"){
      return {
        ...state,
        isModalOpen:false
      }
    }
    else if(action.type === "REMOVE_ITEM"){
      const newPeople = state.people.filter(person=>person.id!==action.payload);
      return {...state,people:newPeople,isModalOpen:true,modalContent:`${action.name} is removed`}
    }
    else if(action.type === "NO_VALUE"){
      return {...state,isModalOpen:true,modalContent:"No value Added"}
    }
    throw new Error("Congrats, you managed to eff up the input");
  };