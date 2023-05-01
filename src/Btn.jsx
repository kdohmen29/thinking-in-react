export default function Btn(props) {

    // const handleClick = () => {
    //     console.log("You clicked me")
    // }

    return (
        <>
            <button onClick={props.onClick}>I'm a button</button>
            <div onMouseOver={props.onMouseHover}>Mouse Over</div>
        </>
    )
}
