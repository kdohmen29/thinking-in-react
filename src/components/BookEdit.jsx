import {useState} from "react";

export default function BookEdit({book, handleEdit}) {

    const [title, setTitle] = useState(book.title)

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        handleEdit(book.id, title);
    }


    return (
        <form className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary" onClick={handleClick}>Save</button>
        </form>
    )
}