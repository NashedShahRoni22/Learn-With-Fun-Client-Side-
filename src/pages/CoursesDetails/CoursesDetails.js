import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaCrown } from "react-icons/fa";
import Pdf from "react-to-pdf";
import {
  FcVideoCall,
  FcViewDetails,
  FcAnswers,
  FcParallelTasks,
  FcMoneyTransfer,
} from "react-icons/fc";
import {FaFileDownload} from "react-icons/fa";

const CoursesDetails = () => {
  const course = useLoaderData();
  const { id, title, thumbnail, description, video, quiz, projects, price } =
    course;

  //react to pdf
  const ref = React.createRef();
  const options = {
    orientation: "portrait",
    unit: "in",
    format: [22, 20],
  };
  
  return (
    <section className="py-5 my-5 container">

      <Card ref={ref}>
        <div className="card-head p-2 d-flex justify-content-between">
          {" "}
          <h4>
            <FcViewDetails className="me-2 display-5"></FcViewDetails>
            <strong>{title}</strong>
          </h4>{" "}
          <>
          <Pdf
          targetRef={ref}
          filename='course-details.pdf'
          options={options}
          x={0.5}
          y={0.5}
          scale={1}
        >
          {({ toPdf }) => (            
              <FaFileDownload onClick={toPdf} className="display-5 text-primary"/>
          )}
        </Pdf>
          </>
        </div>

        <div className="course-details row align-items-center p-2">
          <div className="col-8">
            <Card.Img variant="top" src={thumbnail} height="400px" />
          </div>
          <div className="col-4">
            <h5>
              <FcVideoCall className="me-2" />
              {video} videos
            </h5>
            <h5>
              <FcAnswers className="me-2" />
              {quiz} Quizs
            </h5>
            <h5>
              <FcParallelTasks className="me-2" />
              {projects} Projects
            </h5>
            <h5>
              <FcMoneyTransfer className="me-2" />
              {price} BDT
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
          <Link className="course-btn" to={`/checkout/${id}`}>
            Get Premium Access <FaCrown className="ms-3" />
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default CoursesDetails;
