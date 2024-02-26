import React from 'react';
import { useEffect, useState } from "react";
import IMovie from "../models/IMovie";
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import MovieList from "./MovieList";
import Home from "./Home";


import NavigationMenu from './NavigationMenu';
import { getMovieList } from "../service/MovieService";
import MovieDetails from "./MovieDetails";




const App = () => {

    const [upcomingMovies, setupcomingMovies] = useState<IMovie[]>([]);
    const [currentMovies, setcurrentMovies] = useState<IMovie[]>([]);
    const [topIndianMovies, settopIndianMovies] = useState<IMovie[]>([]);
    const [topRatedMovies, settopRatedMovies] = useState<IMovie[]>([]);
    const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);




    useEffect(() => {

        const MovieList = async () => {

            try {

                {
                    const movieData = await getMovieList("http://localhost:4000/movies-coming")

                    //console.log(movieData);
                    const arrayOfMovieList = movieData.map(

                        (movie) => {

                            return {
                                id: movie.id,
                                title: movie.title,
                                storyline: movie.storyline,
                                imdbRating: movie.imdbRating,
                                posterurl: movie.posterurl,
                                actors: movie.actors,
                                genres: movie.genres,
                                year: movie.year
                            };

                        }

                    );
                    setupcomingMovies(arrayOfMovieList);

                }

                {
                    const movieData = await getMovieList("http://localhost:4000/movies-in-theaters")
                    //console.log(movieData);
                    const arrayOfMovieList = movieData.map(

                        (movie) => {

                            return {
                                id: movie.id,
                                title: movie.title,
                                storyline: movie.storyline,
                                imdbRating: movie.imdbRating,
                                posterurl: movie.posterurl,
                                actors: movie.actors,
                                genres: movie.genres,
                                year: movie.year
                            };

                        }

                    );

                    setcurrentMovies(arrayOfMovieList);

                }

                {
                    const movieData = await getMovieList("http://localhost:4000/top-rated-india")
                    //console.log(movieData);
                    const arrayOfMovieList = movieData.map(

                        (movie) => {

                            return {
                                id: movie.id,
                                title: movie.title,
                                storyline: movie.storyline,
                                imdbRating: movie.imdbRating,
                                posterurl: movie.posterurl,
                                actors: movie.actors,
                                genres: movie.genres,
                                year: movie.year
                            };

                        }

                    );

                    settopIndianMovies(arrayOfMovieList);

                }

                {
                    const movieData = await getMovieList("http://localhost:4000/top-rated-movies")
                    //console.log(movieData);
                    const arrayOfMovieList = movieData.map(

                        (movie) => {

                            return {
                                id: movie.id,
                                title: movie.title,
                                storyline: movie.storyline,
                                imdbRating: movie.imdbRating,
                                posterurl: movie.posterurl,
                                actors: movie.actors,
                                genres: movie.genres,
                                year: movie.year
                            };

                        }

                    );

                    settopRatedMovies(arrayOfMovieList);

                }

                {
                    const movieData = await getMovieList("http://localhost:4000/favourite")
                    //console.log(movieData);
                    const arrayOfMovieList = movieData.map(

                        (movie) => {

                            return {
                                id: movie.id,
                                title: movie.title,
                                storyline: movie.storyline,
                                imdbRating: movie.imdbRating,
                                posterurl: movie.posterurl,
                                actors: movie.actors,
                                genres: movie.genres,
                                year: movie.year
                            };

                        }

                    );

                    setFavoriteMovies(arrayOfMovieList);

                }


            } catch (error: any) {
                console.error(error)
            }



        }

        MovieList();


    });

    return (

        <>
            <Container fluid>
            <header>
                <h1>
                    <div className="text-center">
                        <div className="jumbotron">
                            <h1>Movies on the Tip</h1>
                        </div>

                    </div>
                </h1>
            </header>
            
            </Container>

            <NavigationMenu />

            
            <Routes>
                <Route path="/movie-manager" element={<Home />} />

                <Route path="/comingsoon" element={<MovieList movies={upcomingMovies} type="movies-coming" />} />

                <Route path="/movieintheater" element={<MovieList movies={currentMovies} type="movies-in-theaters" />} />
                <Route path="/topindianmovies" element={<MovieList movies={topIndianMovies} type="top-rated-india" />} />
                <Route path="/topmovies" element={<MovieList movies={topRatedMovies} type="top-rated-movies" />} />
                <Route path="/favorites" element={<MovieList movies={favoriteMovies} type="favourite" />} />
                <Route path="/:type/:id" element={<MovieDetails />} />

            </Routes>


        </>



    )
}

export default App;