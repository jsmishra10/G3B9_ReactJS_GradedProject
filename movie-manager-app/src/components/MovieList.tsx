import React from "react";

import IMovie from "../models/IMovie";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from "./utils/Rating";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addToFav, removeFromFav } from "../service/MovieService";
import { Link } from "react-router-dom";
import Header from "./utils/Header";
import { useState } from 'react';
import { getMovieDetailsById } from "../service/MovieService";
import ValidationMsg from "./utils/ValidationMsg";



type Props = {
    movies: IMovie[],
    type?: string
}
const MovieList = ({ movies, type }: Props) => {

    const [msgTxt, setMessage] = useState<string | null>(null);
    const [movieId, setMovieId] = useState('');
    const [errMsg, setErrorMessage] = useState<string | null>(null);
    





    return (
        <div style={{
            display: 'block',
            width: 1500, padding: 20, height: 500, alignContent: 'center'
        }}>
            <Container fluid>
                <Row>
                    <Col xs lg={3}>
                        {
                            (type === "movies-coming") && <Header message="Movies Coming Soon" />

                        }
                        {
                            (type === "movies-in-theaters") && <Header message="Movies Running in Theaters" />
                        }
                        {
                            (type === "top-rated-india") && <Header message="Top Rated Movies in India" />
                        }
                        {
                            (type === "top-rated-movies") && <Header message="Top Rated Movies Globally" />
                        }

                        {
                            (type === "favourite") && <Header message="Faourite List" />
                        }
                    </Col>
                </Row>

                <Row>


                    {
                        movies.map(

                            ({ id, title, storyline, imdbRating, posterurl, actors, genres, year }, idx) =>



                            (
                                <Col xs lg={3}>

                                    <div key={idx} >

                                        <Card style={{ width: '20rem', height: '35rem' }}>
                                            <Card.Img variant="top" src={posterurl} style={{ height: '25rem' }} alt={title} />
                                            <Card.Body>
                                                <Card.Title>

                                                    <div>
                                                        {title}
                                                        <div>
                                                            <p style={{ fontSize: '15px' }}>Rating: <Rating value={imdbRating} /></p>
                                                        </div>

                                                    </div>



                                                </Card.Title>

                                                <Link className="btn btn-primary" to={`/${type}/${id}`}>Details</Link>{' '}




                                                {(type !== "favourite") &&

                                                    <Button variant="danger sm" onClick={() => {

                                                        const movieRec = {

                                                            id: id,
                                                            title: title,
                                                            storyline: storyline,
                                                            imdbRating: imdbRating,
                                                            posterurl: posterurl,
                                                            actors: actors,
                                                            genres: genres,
                                                            year: year

                                                        }


                                                        const checkMoviePresent = async () => {

                                                            try {


                                                                const movieDetails = await getMovieDetailsById('favourite', id);






                                                                const updateMesages = () => {
                                                                    setMovieId(movieDetails.id);
                                                                    setErrorMessage("Movie already present in Favourite List");
                                                                    setMessage(null);
                                                                }
                                                                updateMesages();






                                                            } catch (error: any) {

                                                                addToFav(movieRec);
                                                                const updateMesages = () => {
                                                                    setMovieId(id);
                                                                    setMessage("Successfully added to favourite list");
                                                                    setErrorMessage(null);
                                                                }
                                                                updateMesages();

                                                                console.error(error)
                                                            }

                                                        }
                                                        checkMoviePresent();

                                                        //console.log(output);                                           

                                                    }}>Add to Fav</Button>


                                                }

                                                {(type === "favourite") &&

                                                    <Button variant="danger sm" onClick={() => {

                                                        const movieRec = {

                                                            id: id,
                                                            title: title,
                                                            storyline: storyline,
                                                            imdbRating: imdbRating,
                                                            posterurl: posterurl,
                                                            actors: actors,
                                                            genres: genres,
                                                            year: year

                                                        }

                                                        removeFromFav(movieRec.id);
                                                        //console.log(title);                                           

                                                    }}>Remove</Button>

                                                }
                                                {

                                                    (
                                                        errMsg != null && movieId === id
                                                    )
                                                    && <ValidationMsg messageType="error" messageTxt={errMsg} />
                                                }

                                                {
                                                    (msgTxt != null && movieId === id) && <ValidationMsg messageType="msg" messageTxt={msgTxt} />
                                                }



                                            </Card.Body>
                                        </Card>
                                        <br />

                                    </div>
                                </Col>






                            )
                        )

                    }

                </Row>
            </Container>
        </div>



    );






}

export default MovieList;