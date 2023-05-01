import {useState} from "react";
import BookEdit from "./BookEdit";

export default function BookShow({book, handleDeleteBook, onEdit}) {

    const [edit, setEdit] = useState(true)

    const handleDelete = () => {
        handleDeleteBook(book.id)
    }

    const handleEdit = (id, title) => {
        onEdit(id, title);
        setEdit(!edit)
    }

    const display = edit ? <h3>{book.title}</h3>: <BookEdit book={book} handleEdit={handleEdit}/>

    return (
        <div className={"book-show"}>
            <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books"/>
            <div>{display}</div>
            <div className={"actions"}>
                <button className={"edit"} onClick={handleEdit}>Edit</button>
                <button className={"delete"} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}