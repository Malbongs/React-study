import PropTypes from "prop-types"

const FuntionComponent = (props) =>{
    let{title,name} = props;
   

    return(
        <>
        <div>제목 : {title}</div>
        <div>이름 : {name}</div>
        <div>안녕</div>
        <div>{props.children}</div>
        <div>id : {props.id}</div>
        <div>pass : {props.pass}</div>
        </>
    );
}

FuntionComponent.defaultProps = {
    id: "qothgus13",
    pass: "!wnwnwnwnwnw"
}

FuntionComponent.propTypes = {
    title:  PropTypes.string,
    name: PropTypes.string,

}
export default  FuntionComponent;