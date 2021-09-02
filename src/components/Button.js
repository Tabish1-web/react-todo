
function Button({btnText,btnCloseText,showBtn,showButton}) {
    return (
        <button
        className="btn"  
        onClick={showBtn}
        style={showButton ? {backgroundColor:"red"} : {backgroundColor:"black"}}>
            { showButton ? btnCloseText : btnText}
        </button>
    )
}

Button.defaultProps = {
    btnText : "+Task",
    btnCloseText : "Close"
}

export default Button
