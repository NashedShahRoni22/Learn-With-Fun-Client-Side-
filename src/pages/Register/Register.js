import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="py-5">
      <h3 className="text-light my-3">Please Register !</h3>
      <Form className="bg-light p-3 rounded">
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>
            {" "}
            <strong>Enter Name</strong>{" "}
          </Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhotoUrl">
          <Form.Label>
            {" "}
            <strong>Enter photoURL</strong>{" "}
          </Form.Label>
          <Form.Control type="text" placeholder="Enter photoURL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            {" "}
            <strong>Email address</strong>{" "}
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            {" "}
            <strong>Password</strong>{" "}
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <p className="my-3 text-center text-light">
        Already Registered?{" "}
        <Link to="/login" className="text-light">
          Please Login
        </Link>
      </p>
    </section>
  );
};

export default Register;
