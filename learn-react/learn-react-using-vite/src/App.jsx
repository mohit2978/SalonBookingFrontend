import { useState } from 'react'
import './App.css'
import MovieCard from "./component/MovieCard.jsx";
import MovieList from "./component/MovieList.jsx";

function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

          <h1 className="text-9xl text-fuchsia-600 bg-amber-300 font-light underline ">
              Neelam Cinema
          </h1>

      </div>
        <div className="flex flex-wrap">
            <MovieCard/>
            <MovieCard/>
        </div>
        <MovieList/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
        <MyButton />

    </>
  )
}

export default App
