function Sub(props){
    return (
        <>
            <h1>This is Subtract component</h1>
            {props.x}
            {props.y}
            <h3>Subtraction of {props.x} and {props.y} is {props.x - props.y}</h3>
        </>
    )
}

export default Sub;
