import { useState,useRef, useMemo, useCallback } from "react";

const HookMemo = ()=>{

    let [list,setState] = useState([]);
    let [text,setText] = useState([''])
    let inputNumber = useRef(null);

    let buttonClick = useCallback(()=>{
        setText("test");
    },[]);

    let addNumber = useCallback( () =>{
        let newList = list.concat(Number(inputNumber.current.value));
        setState(newList);
    },[list]);

    let getAvg = ()=>{
        console.log("list : ", list);
        if(list.length === 0) return 0;
        const sum = list.reduce((a,b)=> a+b);
        return sum / list.length;
    }

    let avg = useMemo(()=>{return getAvg()},[list]);

    return(
        <>
        <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}} />
        <button onClick={buttonClick}>변경</button>
        <br />
        <input ref={inputNumber} type="number" />
        <button onClick={addNumber}>추가</button>
        <ul>
            {list.map((value,index)=>{
                return <li key={index}>{value}</li>
            })}
        </ul>
        {avg}
        </>
    )
}

export default HookMemo;