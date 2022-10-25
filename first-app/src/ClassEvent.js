import { Component } from "react";


class ClassEvent extends Component{
    
    constructor(props){
        super(props);
        this.state ={
            number:0
        }
      
    }
    Number = (e)=>{
        console.log(e.target.value);
        console.log(e)
        this.setState({number:this.state.number+1});
    }
    consoleLog = (e,name)=>{
        console.log(name,"안녕")
    }
   

    render(){

        return(
            <>
            <h1>{this.state.number}</h1>
            {/* 인자를 넣을 때는 괄호가 필요함 */}
            <button value={this.state.number} onClick={this.Number}>버튼</button>
            <button onClick={(e)=>{this.consoleLog(e,"최준현")}}>이름</button>
            </>
        );
    }
}

export default ClassEvent;