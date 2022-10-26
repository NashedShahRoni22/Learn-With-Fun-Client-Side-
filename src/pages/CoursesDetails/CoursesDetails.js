import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaCrown } from "react-icons/fa";
import {
  FcVideoCall,
  FcViewDetails,
  FcAnswers,
  FcParallelTasks,
  FcMoneyTransfer,
} from "react-icons/fc";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { title, thumbnail, description, video, quiz, projects, price } =
    course;
  return (
    <section className="py-5">
      <Card>
        <Card.Header>
          {" "}
          <h4>
            <FcViewDetails className="text-primary me-2"></FcViewDetails>
            {title}
          </h4>{" "}
        </Card.Header>

        <div className="course-details row align-items-center p-2">
          <div className="col-6">
            <Card.Img variant="top" src={thumbnail} height="400px" />
          </div>
          <div className="col-6">
            <h5>
              <FcVideoCall />
              Video: {video}
            </h5>
            <h5>
              <FcAnswers /> Quiz: {quiz}
            </h5>
            <h5>
              <FcParallelTasks /> Projects: {projects}
            </h5>
            <h5>
              <FcMoneyTransfer /> Price: {price} BDT
            </h5>
          </div>
        </div>

        <Card.Body>
          <Card.Text>
            <hr />
            <h5>Course Details:</h5>
            <hr />
            <span className="text-muted">{description}</span>
          </Card.Text>
          <Link className="btn btn-primary w-100" to="/checkout">
            Get Premium <FaCrown />
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CoursesDetails;
