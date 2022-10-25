import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaCrown, FaDiscourse } from "react-icons/fa";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, thumbnail, description } = course;
  return (
    <section className="py-5">
      <Card>
        <Card.Header>
          {" "}
          <h4><FaDiscourse className="text-primary me-2"></FaDiscourse>{title}</h4>{" "}
        </Card.Header>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Text className="text-muted">{description}</Card.Text>
          <Link className="btn btn-primary w-100" to='/checkout'>Get Premium <FaCrown/></Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CoursesDetails;
