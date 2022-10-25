import React,{ useState } from 'react';

// const AnnyState = () =>{
//     const [message,setMessage] = useState("");
//     const onClickEnter = () =>{setMessage("안녕하세요~");}
//     const onClickLeave = ()=>{setMessage("안녕히가세요");}

//     return (
//         <>
//         <button onClick={onClickEnter}>입장</button>
//         <button onClick={onClickLeave}>퇴장</button>
//         <h1>{message}</h1>
//         </>
//     );
// }

const AnnyState = () =>{
    let [number,setNumber] = useState(0);
    const Increase = () => {setNumber(number+1);}
    const Decrease = () => {setNumber(number-2);}
    return(
        <>
        <h1>{number}</h1>
        <button onClick={Increase}>1씩 증가</button>
        <button onClick={Decrease}>2씩 감소</button>
        </>
    )
}
export default AnnyState;