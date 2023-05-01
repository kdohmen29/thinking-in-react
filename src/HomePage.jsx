


export default function HomePage() {


    const time = new Date()
    const day = time.toLocaleString("en-us", {weekday: "long"}).toLowerCase()
    const morning = time.getHours() >= 6 && time.getHours() <= 12
    let dayMessage;

    if (day === "monday") {
        dayMessage = `Happy ${day}`
    } else if (day === "tuesday") {
        dayMessage = `${day}, 4 days to go`
    } else if (day === "wednesday") {
        dayMessage = `${day}, half way there`
    } else if (day === "thursday") {
        dayMessage = `${day}, start planning the weekend`
    } else if (day === "friday") {
        dayMessage = `Whoo hoo, the weekend is coming!!`
    } else {
        dayMessage = "Stay calm and keep having fun!"
    }

    const currentMessage = () => {
        const day = new Date().getDay();

        return (
            day >= 1 && day <= 5
                ? <h4>Get to work</h4>
                : <h4>Relax</h4>
        )
    }


    return (
        <>
            <h1>Home Page</h1>
            {currentMessage()}
            <h3>{dayMessage.toUpperCase()}</h3>
            <h3>{morning ? "Have You had breakfast yet?" : "Good Afternoon"}</h3>
        </>

    )
}