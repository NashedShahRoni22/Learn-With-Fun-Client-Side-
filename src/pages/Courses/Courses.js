import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Courses = () => {
  const courses = useLoaderData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="row py-5 my-5">
      <div className="col-3">
        <Button variant="outline-light" className="d-md-none" onClick={handleShow}>
          Courses Category
        </Button>

        <Offcanvas show={show} onHide={handleClose} responsive="md">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Courses Categorey</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ListGroup>
              {courses.map((course) => (
                <Link to={`/courses/${course.id}`} className="btn" key={course.id}>
                  <ListGroup.Item>{course.name}</ListGroup.Item>
                </Link>
              ))}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
      <div className="col-9">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
          {courses.map((course) => (
            <div key={course.id}>
              <Card className="shadow">
                <Card.Img variant="top" src={course.img} />
                <Card.Body>
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {course.description.slice(0, 150)}...
                  </Card.Text>
                    <Link className="btn btn-primary w-100" to={`/courses/${course.id}`}>Course Details</Link>
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
