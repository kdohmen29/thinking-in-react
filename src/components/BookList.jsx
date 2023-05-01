import BookShow from "./BookShow";

export default function BookList({books, handleDeleteBook, onEdit}) {

    const renderedBooks = books.map((book) => {
        return<BookShow key={book.id} book={book} handleDeleteBook={handleDeleteBook} onEdit={onEdit}/>
    })

    return (
        <div className={"book-list"}>
            {renderedBooks}
        </div>
    )
}