
const Test  = () =>{
    var name = "최준현";
    let my_style  = {
        backgroundColor: "blue",
        color: "orange",
        fontSize:"40px",
        padding: "12"
    }
    return(
        <>
        <div style={my_style}>{name}</div>
        </>
    )
}

export default Test;
