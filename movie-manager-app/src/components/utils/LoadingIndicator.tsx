import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

type Props = {

}

const LoadingIndicator = () => {

    return (

        <div className='d-flex flex-column align-items-center'>

            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>


        </div>

        
    )

}

export default LoadingIndicator;