
import './bir.css';
import fish from './seson2.png';
const FoodComponent = (props) =>{

    return(
        <>
        <div className='book'>
        <div className="title">{props.title}</div>
        <img className='im' src={fish}></img><br />
        <h1>나의 낚시는 4시 40분에 시작된다.</h1>
        <div className='content'>
         <span>저자: {props.author}</span><br/>
         <span>판매가: {props.price}</span><br/>
         <span>구분: {props.type}</span><br/>   
        </div>

        </div>
        
        </>
    )
}
FoodComponent.defaultProps = {
    title:"이번주 베스트셀러",
    author:"최준현",
    price:"20만원",
    type:"낚시계발서"
}

export default FoodComponent;