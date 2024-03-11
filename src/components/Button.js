
const Button = (props) => {
    return (
        <button  onClick={props.addFunctionality}> {props.children} </button>
    )
}

export default Button;