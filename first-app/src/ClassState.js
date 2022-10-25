import { Component } from "react";

class ClassState extends Component{
    state={
        number:0,
    }

    render(){
        let {number} = this.state
        return(
            <>
            <h1>Number: {number}</h1>
           
            <button onClick={()=>{
                this.setState((prev)=>({number: prev.number +2}))
            }}>+2</button>
            <button onClick={()=>{
                this.setState((prev)=>({number: prev.number -1}))
            }}>-1</button>
            </>
        )
    }

}

export default ClassState;