import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { DiGithubAlt } from "react-icons/di";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const { userRegistration, loginGoogle } = useContext(AuthContext);

  // handel google login
  const handelGoogleLogin = () => {
    loginGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //Handel Registration
  const handelRegistration =(e)=>{
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    userRegistration(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);
      form.reset();
    })
    .catch(e=>{
      console.error(e);
    })
  }

  return (
    <section className="py-5">
      <h3 className="text-light my-3">Please Register !</h3>
      <Form className="bg-light p-3 rounded" onSubmit={handelRegistration}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>
            {" "}
            <strong>Enter Name</strong>{" "}
          </Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhotoUrl">
          <Form.Label>
            {" "}
            <strong>Enter Photo URL</strong>{" "}
          </Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            {" "}
            <strong>Email address</strong>{" "}
          </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>
            {" "}
            <strong>Password</strong>{" "}
          </Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
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

      <div className="optional-login">
        <Button className="google btn-light w-100 my-2" onClick={handelGoogleLogin}>
          <FcGoogle></FcGoogle>
          <span className="ms-2">Sign In with Google</span>
        </Button>
        <Button className="google btn-light w-100 my-2">
          <DiGithubAlt></DiGithubAlt>
          <span className="ms-2">Sign In with Github</span>
        </Button>
      </div>
    </section>
  );
};

export default Register;
