import React from 'react'
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';

const Home = () => {

    return (

        <Container>  
            <h1>              
                <FontAwesomeIcon icon={faFilm} className="me-2"/>
                Movie Manager
            </h1>
                <hr />
                <p>
                    This is an online application where you can check the list of Upcoming movies, Current Movies, Top Rated Movies in India and Globally. Also you can create your own favorite list of movies.
                </p>
                
        </Container>


    )



}

export default Home;