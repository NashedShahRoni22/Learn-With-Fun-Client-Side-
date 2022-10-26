import React from 'react';
import errorImg from '../../img/error-page.jpg'

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="" className='img-fluid'/>
        </div>
    );
};

export default ErrorPage;