import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const MovieCard = (props) => {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("count is increased"+count);
    // },[count])

   // Access Redux state (count)
    const dispatch = useDispatch(); // Dispatch actions to update state

    const increment = () => {
        dispatch({ type: 'INCREMENT' }); // Dispatch INCREMENT action
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' }); // Dispatch DECREMENT action
    };


    return (
        <div className="card border-4 border-dark">
            <h1 className="text-amber-500 backdrop-blur-2xl">{props.name}</h1>
            <img className="w-60 max-h-90  rounded-3xl"
                src={props.imageURl}
                alt="Movie" />
            <button onClick={
                () => {
                    setCount((count) => count + 1);
                    increment();
                }
            }
                className="rounded-br-4xl font-sans text-violet-400 backdrop-contrast-125">Book Ticket</button>
            <button onClick={
                () => {
                    setCount((count) => count - 1);
                    decrement();
                }
            }
                    className="rounded-br-4xl font-sans text-violet-400 backdrop-contrast-125">Cancel Ticket</button>
            <h5>Tickets booked count : {count}</h5>
        </div>
    )
}
export default MovieCard