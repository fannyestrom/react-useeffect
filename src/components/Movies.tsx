import { useEffect, useState } from "react";
import axios from "axios";
import { IOmdbResponse } from "../models/IOmdbResponse";
import { Spinner } from "./Spinner";

export const Movies = () => {
    const [name, setName] = useState("Ash");
    const [age, setAge] = useState(0);
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        // console.log("useEffect - name");
    }, [name]);

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get<IOmdbResponse>(
            "http://omdbapi.com?apikey=416ed51a&s=star"
            );
            setMovies(response.data.Search);
            setFetched(true);
        };

        if(fetched) return;

        getData();
    });


    return (
        <>
        {movies.length === 0 && (
            <section>
                {name} - 
                <button onClick={() => setName("Shiro")}>Ändra</button>
                <button onClick={() => setAge("2")}>Ändra ålder</button>
            </section>
        )}
            Movies:
            {!fetched ? (
                <Spinner></Spinner>
            ) : ( 
            <section className="movies">
                {movies.map((movie) => (
                    <div key={movie.imdbID} className="movie">
                        <h3>{movie.Title}</h3>
                        <div>
                            <img src={movie.Poster} alt={movie.Title} />
                        </div>
                    </div>
                ))}
            </section>
            )}
        </>
    );
};

