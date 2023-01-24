
function LifeComponent(props) {

    return (
        <div>LifeComponent <button onClick={() => props.setCount(props.count + 1)}>+</button></div>
    )
}

export default LifeComponent;