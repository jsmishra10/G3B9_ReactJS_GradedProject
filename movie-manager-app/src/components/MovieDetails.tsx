import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetailsById } from "../service/MovieService";
import IMovie from "../models/IMovie";
import { Row, Col } from "react-bootstrap";
import Rating from "./utils/Rating";
import { Container } from 'react-bootstrap'


const MovieDetails = () => {

    const { type, id } = useParams();
    const [movieDetailsById, setMovieDetails] = useState<IMovie | null>(null);

    useEffect(

        () => {
            const fetchMovieDetails = async () => {

                try {


                    const movieDetails = await getMovieDetailsById(type as string, id as string);

                    const movieRecord = {

                        id: movieDetails.id,
                        title: movieDetails.title,
                        storyline: movieDetails.storyline,
                        imdbRating: movieDetails.imdbRating,
                        posterurl: movieDetails.posterurl,
                        actors: movieDetails.actors,
                        genres: movieDetails.genres,
                        year: movieDetails.year

                    }

                    setMovieDetails(movieRecord);





                } catch (error: any) {
                    console.error(error)
                }

            }

            fetchMovieDetails();
        }
    )



    return (

        <>

            {(movieDetailsById != null &&
            
                <Container>
                    <Row>
                        <Col>
                            <img src={movieDetailsById.posterurl} style={{ width: '500px' }} alt={movieDetailsById.title}></img>
                        </Col>
                        <Col>
                            <p style={{ backgroundColor: 'greenyellow' }}><h1>{movieDetailsById.title}</h1></p>
                            <h1><Rating value={movieDetailsById.imdbRating} /></h1>
                            <Row>
                                <h2>{movieDetailsById.storyline}</h2>
                            </Row>
                            <Row>
                                <p style={{ backgroundColor: 'greenyellow' }}><h2>Year : {movieDetailsById.year}</h2></p>
                            </Row>
                        </Col>

                    </Row>
                    <hr />
                    <Row>
                        <p style={{ backgroundColor: 'greenyellow' }}><h3>Actors in Movie</h3></p>
                        <hr />

                        <div>
                            <h4>
                                {movieDetailsById.actors.map(val => ` ${val}, `)}
                            </h4>
                        </div>






                    </Row>
                    <hr />
                    <Row>
                        <p style={{ backgroundColor: 'greenyellow' }}><h3>Movie Genres</h3></p>
                        <hr />
                        <div>
                            <h4>
                                {movieDetailsById.genres.map(val => ` ${val}, `)}
                            </h4>
                        </div>

                    </Row>



                </Container>


            )

            }


        </>


    );
}

export default MovieDetails;