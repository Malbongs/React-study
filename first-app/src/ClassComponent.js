import { Component } from "react";


class ClassComponent extends Component{
    // static defaultProps ={

    // }
    // static proptypes ={

    // }

    render(){

        return (
            <>
            <div>하이여</div>
            <div>클래스형 컴포넌트</div>
            <div>{this.props.name}</div>
            <div>{this.props.children}</div>
            </>
        )
    }


}

export default ClassComponent;