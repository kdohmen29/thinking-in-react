import Header from "./Header";
import Nav from "./Nav";
import Btn from "./Btn";
import ModeToggler from "./ModeToggler";
import PromoHeading from "./PromoHeading";
import {useEffect, useReducer, useState, useRef} from "react";
import {Children, cloneElement} from 'react'
import MealsList from "./MealsList";
import Counter from "./Counter";
import MealProvider from "./MealProvider";
import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom'
import AboutMe from "./AboutMe";
import NavBar from "./NavBar";
import ReactPlayer from 'react-player'
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

//region REDUCER
// const reducer = (state, action) => {
//     if(action.type === 'ride') return {money: state.money + 10}
//     if(action.type === 'fuel') return {money: state.money - 50};
//     return new Error;
// }
//endregion

// const Row = ({children, spacing}) => {
//     const childStyle = {
//         marginLeft: `${spacing}px`,
//     }
//
//     return (
//         <div className="Row">
//             {Children.map(children, (child, index) => {
//                 return cloneElement(child, {
//                     style: {
//                         ...child.props.style,
//                         ...(index > 0 ? childStyle : {}),
//                     },
//                 })
//             })}
//         </div>
//     )
// }
//
//
//
// // const orderAmend = { // using the spread operator to change the item in the previous ...order
// //     ...order, // the ... will copy an obj if it inside curly's
// //     item: "Pepperoni Pizza"
// // }
//
//
//
// export default function App() {
//
//     const [user, setUser] = useState([])
//     const formInputRef = useRef(null)
//     const order = {
//         id: 1,
//         name: "Kyle",
//         item: "Marg Pizza",
//         price: "$30.00"
//     }
//
//     //return <Order {...order>}/> // This will automatically pass the "order" variable down as props with the name in the obj
//
//     const fetchData = () => {
//         fetch("https://randomuser.me/api/?results=1")
//             .then(response => response.json())
//             .then(data => setUser(data));
//     }
//     useEffect(() => {
//         fetchData()
//
//     }, [])

    // region FEEDBACK FORM DATA
    // const [form, setForm] = useState(initialState)
    // const [list, setList] = useState([])
    // const [score, setScore] = useState("10");
    // const [comment, setComment] = useState("")
    // const handleFormChange = (e) => {
    //     setForm({...form, [e.target.name]: e.target.value})
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // setList(oldList => ({...oldList, form}))
    //     setList(oldList => [...oldList, {form}])
    //     console.log(list.length + 1);
    //     setForm(initialState)
    // }
    //
    // const handleFeedbackSubmit = (e) => {
    //     e.preventDefault();
    //     alert("Thanks for your feedback with a score of " + score + " and a message of: " + comment)
    //     setScore("10")
    //     setComment("")
    // }
    //
    // endregion
    //region RANDOM IMG URL
    // const randomImageUrl = "https://picsum.photos/400/265"
    //endregion
    //region LEARNING
    // const [word, setWord] = useState("Eat");
    //
    // const handleClick = () => {
    //     console.log("You clicked me")
    // }
    //
    // const handlePromoClick = () => {
    //     setWord("Drink")
    // }
    //
    // const data = {
    //     heading:"80% off all items!",
    // callToAction: "Everything must go!"
    // }
    //
    // const initialState = {money: 100};
    // const [state, dispatch] = useReducer(reducer, initialState);
    //endregion
    //region CALCULATOR

    // const [answer, setAnswer] = useState("");
    // const [num1, setNum1] = useState("")
    // const [operator, setOperator] = useState("")
    // const [clear, setClear] = useState("clear")
    //
    //
    // function execute(num1, operator, answer) {
    //
    //
    //     fetch('http://localhost:8080/' + operator + '/' + num1 + '/' + answer).then(response => { //%2F
    //         return response.json();
    //     }).then((newAnswer) => {
    //         setAnswer(newAnswer);
    //         setNum1("")
    //         setOperator("")
    //         setClear("Clear All")
    //     });
    // }

    // let enteredNum = num1;
    // const handleNum1Click = (num) => {
    //     enteredNum += num;
    //     setNum1(enteredNum)
    //     setClear("Clear")
    // }

    // const handleClear = () => {
    //    if(num1 !== "") {
    //        setNum1("")
    //        setClear("Clear All")
    //    } else {
    //        setOperator("")
    //        setAnswer("")
    //    }
    // }

    // const handleOperatorClick = (operator) => {
    //
    //     if (answer === "") {
    //         setAnswer(enteredNum)
    //         setNum1("");
    //         setClear("Clear All")
    //     } else
    //         setNum1(enteredNum);
    //         setOperator(operator)
    // }

    //endregion

//     function focusInput() {
//         formInputRef.current.focus()
//     }
//
//     return Object.keys(user).length > 0 ? ( // this turns all the keys of the "user" obj into an array
//         <>
//             <h1>Data returned</h1>
//             <h2>First Name: {user.results[0].name.first}</h2>
//             <h2>Last Name: {user.results[0].name.last}</h2>
//             <input ref={formInputRef}/>
//             <button onClick={focusInput}>focus</button>
//             <Row spacing={32}>
//                 <p>Pizza Margarita</p>
//                 <p>2</p>
//                 <p>30$</p>
//                 <p>18:30</p>
//                 <p>John</p>
//             </Row>
//
//             {/*region FEEDBACK-FORM*/}
//             {/*<form onSubmit={handleSubmit}>*/}
//             {/*    <input type="text" name={"firstName"} value={form.firstName} onChange={handleFormChange}*/}
//             {/*           placeholder={"First Name"}/>*/}
//             {/*    <br/>*/}
//             {/*    <br/>*/}
//             {/*    <input type="text" name={"lastName"} value={form.lastName} onChange={handleFormChange}*/}
//             {/*           placeholder={"Last Name"}/>*/}
//             {/*    <br/>*/}
//             {/*    <br/>*/}
//             {/*    <button disabled={!form.firstName || !form.lastName} type={"submit"}>add</button>*/}
//             {/*    <br/>*/}
//             {/*</form>*/}
//             {/*<br/>*/}
//             {/*<ul>*/}
//             {/*    {list.map((item, index) => (<li key={index}>{item.form.firstName} {item.form.lastName}</li>))}*/}
//             {/*</ul>*/}
//             {/*<hr/>*/}
//             {/*<h2>Feedback Form</h2>*/}
//             {/*<h3>Score: {score}</h3>*/}
//             {/*<form onSubmit={handleFeedbackSubmit}>*/}
//             {/*    <input type="range" min="0" max="10" value={score} onChange={e => setScore(e.target.value)}/>*/}
//             {/*    <h3>Comment:</h3>*/}
//             {/*    <textarea value={comment} onChange={e => setComment(e.target.value)}>Comment</textarea>*/}
//             {/*    <br/>*/}
//             {/*    <button type={"submit"}>Submit</button>*/}
//             {/*</form>*/}
//
//             {/*endregion*/}
//             {/*region ROUTES*/}
//             {/*<NavBar />*/}
//             {/*<ReactPlayer*/}
//             {/*    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'*/}
//             {/*    playing={false}*/}
//             {/*    volume={0.25}*/}
//             {/*    controls*/}
//             {/*/>*/}
//             {/*<Routes>*/}
//             {/*    <Route path="/Home" element={<HomePage />} />*/}
//             {/*    <Route path="/about-me" element={<AboutMe />} />*/}
//             {/*</Routes>*/}
//             {/*<img src={randomImageUrl} height={400} alt="random Image"/>*/}
//             {/*endregion*/}
//             {/* region Calculator */}
//             {/*-------------------------------------------------------------------*/}
//             {/*<h2>Calculator</h2>*/}
//             {/*<h3>{answer} {operator} {num1}</h3>*/}
//             {/*<hr/>*/}
//             {/*<div>*/}
//             {/*    <button onClick={() => handleNum1Click("7")}>7</button>*/}
//             {/*    <button onClick={() => handleNum1Click("8")}>8</button>*/}
//             {/*    <button onClick={() => handleNum1Click("9")}>9</button>*/}
//             {/*    <button onClick={() => handleOperatorClick("*")}>*</button>*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <button onClick={() => handleNum1Click("4")}>4</button>*/}
//             {/*    <button onClick={() => handleNum1Click("5")}>5</button>*/}
//             {/*    <button onClick={() => handleNum1Click("6")}>6</button>*/}
//             {/*    <button onClick={() => handleOperatorClick("sub")}>-</button>*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <button onClick={() => handleNum1Click("1")}>1</button>*/}
//             {/*    <button onClick={() => handleNum1Click("2")}>2</button>*/}
//             {/*    <button onClick={() => handleNum1Click("3")}>3</button>*/}
//             {/*    <button onClick={() => handleOperatorClick("add")}>+</button>*/}
//             {/*</div>*/}
//             {/*<div>*/}
//             {/*    <button onClick={handleClear}>{clear}</button>*/}
//             {/*    <button onClick={() => handleNum1Click("0")}>0</button>*/}
//             {/*    <button onClick={() => execute(num1, operator, answer)}>=</button>*/}
//             {/*    <button onClick={() => handleOperatorClick("divide")}>/</button>*/}
//             {/*</div>*/}
//             {/*<hr/>*/}
//             {/*-------------------------------------------------------------------*/}
//
//             {/*endregion*/}
//             {/* region LEARNING */}
//             {/*<PromoHeading heading={data.heading} callToAction={data.callToAction}/>*/}
//             {/*<Nav />*/}
//             {/*<Header title="World" name="Kyle" color={"Blue"} greet={"Howdy"}/>*/}
//             {/*<Btn onClick={handleClick}/>*/}
//             {/*<ModeToggler />*/}
//             {/*<PromoHeading heading={data.heading} callToAction={data.callToAction} word={word + " at little Lemon"} />*/}
//             {/*<Btn onMouseHover={handlePromoClick} />*/}
//             {/*<MealProvider>*/}
//             {/*    <MealsList />*/}
//             {/*    <Counter />*/}
//             {/*</MealProvider>*/}
//             {/*<hr/>*/}
//             {/*<hr/>*/}
//             {/*<h1>Wallet: {state.money}</h1>*/}
//             {/*<div>*/}
//             {/*    <button onClick={() => dispatch({type: 'ride'})}>*/}
//             {/*        A new customer!*/}
//             {/*    </button>*/}
//             {/*    <button onClick={() => dispatch({type: 'fuel'})}>*/}
//             {/*        Refill the tank!*/}
//             {/*    </button>*/}
//             {/*</div>*/}
//             {/* endregion*/}
//         </>
//     ) : (
//         <h1>Data Pending...</h1>
//     );
//
//
// };



export default function App() {

    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books")
        setBooks(response.data)
    }

    useEffect(() => {
        fetchBooks();
    }, []);



    const handleBookCreate = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {title})
        setBooks([...books, response.data])
    }

    const handleDeleteBook = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks)
    }

    const handleEditBook = (id, title) => {
        const updatedBooks = books.map((book) => {
            if (book.id == id) {
                return {...book, title}
            }
            return book
        })
        setBooks(updatedBooks)
    }

    return (
        <div className={"app"}>
            <h1>Reading List</h1>
            <BookList   books={books} handleDeleteBook={handleDeleteBook} onEdit={handleEditBook}/>
            <BookCreate onBookCreate={handleBookCreate}/>
        </div>
    );
}



