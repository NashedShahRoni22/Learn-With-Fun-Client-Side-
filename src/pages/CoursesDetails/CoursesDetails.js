import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, thumbnail, description } = course;
  return (
    <section className="py-5">
      <Card>
        <Card.Header> <h4>{title}</h4> </Card.Header>
        <Card.Img variant="top" src={thumbnail}/>
        <Card.Body>
          <Card.Text className="text-muted">{description}</Card.Text>
          <Button variant="success">Get Premium</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CoursesDetails;
