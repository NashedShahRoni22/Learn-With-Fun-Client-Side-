import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CoursesDetails = () => {
    const course = useLoaderData();
    const {id} = course;
    return (
        <div>
            <h1>Courses Details for: {id}</h1>
        </div>
    );
};

export default CoursesDetails;