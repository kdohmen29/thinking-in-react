import Btn from "./Btn";
import {useState} from "react";

export default function ModeToggler() {

    let [darkModeOn, setDarkModeOn] = useState(false);

    const date = new Date();

    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>LightMode is on</h1>

    const handleClick = () => {
        setDarkModeOn(darkModeOn = !darkModeOn)
        console.log(darkModeOn);
    }

    return (
    <>
        {date.toLocaleTimeString()}
        <div>{darkModeOn ? darkMode : lightMode}</div>
        <button onClick={handleClick}>change mode</button>
        <Btn onClick={handleClick} />
    </>
    )
}