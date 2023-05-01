import {Link} from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <h2>NavBar</h2>
            <Link to="/Home" className={"nav-item"}>Home Page</Link>
            <Link to="/about-me" className={"nav-item"}>About Me</Link>
        </>

    )
}