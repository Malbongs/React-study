
import "./SassTest.scss"


const SassTest = ()=>{

    const num1 = 7;
    const num2 = 2;

    const avg = num1 / num2;


    return(
        <>
        <div className="pink"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div>{avg}</div>
        </>
    )
}

export default SassTest;