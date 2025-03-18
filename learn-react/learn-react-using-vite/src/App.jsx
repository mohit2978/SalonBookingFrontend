import { useState } from 'react'
import './App.css'
import MovieCard from "./component/MovieCard.jsx";
import MovieList from "./component/MovieList.jsx";



function App() {
    const movies = [
        {
            name: "Inception",
            imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH"
        },
        {
            name: "The Dark Knight",
            imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug"
        },
        {
            name: "Interstellar",
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg"
        },
        {
            name: "Pushpa 2",
            imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTK_Cq35EB_KZmwZ-8M--dRvv-e6WPhQlaNFnoMXKXivM6AihMq"
        },
        {
            name: "Welcome Back",
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQaKPMJfQpfF5yYfdwnhzi87weKItq6ySZ2gBBuUAteOGHadaaK"
        }
    ];


    return (
    <>
      <div>

          <h1 className="text-9xl text-fuchsia-600 bg-amber-300 font-light underline ">
              Neelam Cinema
          </h1>

      </div>
        <div className="flex flex-wrap ">
            {movies.map(movie => (
                <MovieCard name={movie.name} imageURl={movie.imageUrl} />
            ))}
        </div>

    </>
  )
}

export default App
