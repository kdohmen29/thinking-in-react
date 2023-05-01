import {useState} from "react";


export default function BookCreate({onBookCreate}) {
    const [title, setTitle] = useState("")

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onBookCreate(title)
        setTitle("")
    }

    return (
        <div className={"book-create"}>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className={"input"} value={title} onChange={handleChange}/>
                <button className={"button"}>Create!</button>
            </form>
        </div>
    )
}