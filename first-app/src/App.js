import React, { Component } from 'react';
// import  "./App.scss";
// import TestComponent from './TestComponent';
// import LifeCyclePractice from './LifeCyclePractice';
// import HookLife from './HookLife';
// import HookTest from './HookTest';
// import Sample from "./Sample";
// import HookMemo from './HookMemo';
//  import CssTest from './CssTest';
import SassTest from './SassTest';
// class App extends Component {
//   state = {
//     value: true
//   }

//   render() { 
//     return (
//       <div>
//         <div>
//           <button onClick={()=>{this.setState({value: !this.state.value})}}>컴포넌트 바껴라!</button>
//         </div>
        
//         <hr style={{margin: "50px 0"}}></hr>

//         { this.state.value ? <LifeCyclePractice /> : <TestComponent />}
//       </div>
//     );
//   }
// }

class App extends Component{

  render(){
    return(
      <>
      <SassTest></SassTest>
     {/* <div className='SassTest'>
      <div className='box red'></div>
      <div className='box orange'></div>
      <div className='box yellow'></div>
      <div className='box green'></div>
      <div className='box skyblue'></div>
      <div className='box blue'></div>
      <div className='box puple'></div>
     </div> */}
      </>
    )
  }
}


 
export default App;