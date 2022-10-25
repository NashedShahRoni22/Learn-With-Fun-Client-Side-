import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <section className="row py-5 my-5">
      <div className="col-3">
        <ListGroup>
          {courses.map((course) => (
            <Link to={`/courses/${course.id}`} className="btn">
              <ListGroup.Item>{course.name}</ListGroup.Item>
            </Link>
          ))}
        </ListGroup>
      </div>
      <div className="col-9">
        <div className="row row-cols-1 row-cols-lg-3 g-5">
          {courses.map((course) => (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description.slice(0,200)}<Link to={`/courses/${course.id}`}>...Read More</Link></Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
