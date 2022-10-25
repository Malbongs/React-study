// import styles from "./CssTest.module.css";
import "./SassTest.scss"
import grass from "./grass.png";
const CssTest = ()=>{

    return(
        <>
            <div className="div1">
                <div className="eyeh">
                    <div className="eye"></div>
                </div>
            </div>
            <div className="div2"></div>
            <div className="div3"></div>
            <div className="div4"></div>
            <div className="div5"></div>
            <img src={grass} className="grass"></img>
        </>
    )
}
export default CssTest