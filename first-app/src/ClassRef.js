import React, { Component } from "react";


class ClassRef extends Component{

    // constructor(props){
    //     super(props);
    //     this.box2 = React.createRef();
    // }


    down = ()=>{
      const div = this.div;
      div.scrollTop = div.scrollHeight;
    }

    render(){

        const style1 = {
            width:"200px",
            height: "200px",
            overflowY:"scroll"
        }

        const style = {
            width:"200px",
            height:"200px",
            backgroundColor:"black"
        }
        const style2 = {
            width:"200px",
            height:"200px",
            backgroundColor:"pink"
        }

        return(
            <>
            <div style={style1} ref={(ref)=>{this.div = ref}}>
            <div style={style}></div>
            <div style={style2}></div>
            </div>
            <button onClick={this.down}>아래로</button>
            </>
        )
    }
}

export default ClassRef;