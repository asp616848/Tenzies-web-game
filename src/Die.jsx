export default function Die(props){
    return(
        <button
        onClick={props.toggleHold} // Toggle hold state when clicked
            style={{
                backgroundColor: props.isHeld ? "black" : "white",
                color: props.isHeld ? "white" : "black",
            }}>

            {props.value}
        </button>
    )
}