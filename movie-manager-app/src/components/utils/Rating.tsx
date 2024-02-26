import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarEmpty} from '@fortawesome/free-regular-svg-icons';
import './styles.css';


type Props = {
    value: number
}
const Rating = ({value} : Props) => {

    const numFullStars = Math.floor( value/2);
    const numHalfStars = Math.round(value/2) - Math.floor(value/2);
    const numEmptyStars = 5 - (numFullStars + numHalfStars);
    return (

        <span className="rating">
        
            {
                Array.from({ length: numFullStars }).map(
                    (item, idx) => (

                        <FontAwesomeIcon icon={faStar} key={idx} />

                    )


                )
            }
            {
                Array.from({ length: numHalfStars }).map(
                    (item, idx) => (

                        <FontAwesomeIcon icon={faStarHalfStroke} key={idx} />

                    )


                )
            }
            {
                Array.from({ length: numEmptyStars }).map(
                    (item, idx) => (

                        <FontAwesomeIcon icon={faStarEmpty} key={idx} />

                    )


                )
            }
        </span>


    );

    

}

Rating.defaultProps = {
    value : 5

}

export default Rating;
