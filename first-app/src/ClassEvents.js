import { Component } from "react";

class ClassEvents extends Component{

    state={
        text:"안녕하세요",
        display:"block" 
    }

    

    Click =()=>{
        this.setState({display:"none"});
        
    }
  
    render(){
        const style={
            display: this.state.display
        }
        return(
            <>
            
            <button onClick={this.Click}>사라져라</button>
            <h1 style={style}>{this.state.text}</h1>
            </>
        )
    }
}

export default ClassEvents;