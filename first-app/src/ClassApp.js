import { Component } from "react";

class ClassApp extends Component{
    static defaultProps = {
        text: "이건 기본 text props 입니다."
    }

    render(){
        const test = () =>{
            console.log(this.props.text);
        }
        return(
            <>
            <h1>App 컴포넌트에서 넘겨준 textprops입니다.</h1><br/>
            <button onClick={test} >콘솔메세지</button>
            </>
        )
    }
}


export default ClassApp;