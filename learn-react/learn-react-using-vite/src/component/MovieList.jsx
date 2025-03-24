import React from 'react';
import MovieCard from "./MovieCard.jsx";
import {useSelector} from "react-redux";

const MovieList = () => {
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
    const tcount = useSelector((state) => state.tcount);

    return (

        <div>
        <div>
            <h1 className="text-9xl text-fuchsia-600 bg-amber-300 font-light underline ">
                Neelam Cinema
            </h1>
            <h5>total ticket count is {tcount}</h5>
        </div>
                <div className="flex flex-wrap ">
                    {movies.map((movie,index) => (
                        <MovieCard key={index} name={movie.name} imageURl={movie.imageUrl} />
                    ))}
                </div>
        </div>
    );
};

export default MovieList;