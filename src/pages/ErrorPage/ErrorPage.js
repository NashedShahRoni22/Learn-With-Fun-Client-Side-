import React from 'react';
import errorImg from '../../img/error-page.jpg'

const ErrorPage = () => {
    return (
        <div className='container mx-auto text-center'>
            <img src={errorImg} alt="" className='img-fluid'/>
        </div>
    );
};

export default ErrorPage;