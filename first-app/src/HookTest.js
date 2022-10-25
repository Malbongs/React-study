import { useReducer } from "react";

function reducer(state,action){
    switch( action.type ){
        case "INCREMENT":
            return { ...state,number: state.number + 1}
        case "DECREMENT":
            return { ...state,number: state.number - 1}
        default:
            return state;
    }
}

const HookTest = ()=>{
    let [state,dispatch] = useReducer(reducer,{number:0,text: ''});

   

    return(
        <>
       <h1>{state.number}</h1>
       <button onClick={()=>{dispatch({type:"INCREMENT"})}}>+1</button>
       <button onClick={()=>{dispatch({type:"DECREMENT"})}}>-1</button>
        </>
    );
}

export default HookTest;