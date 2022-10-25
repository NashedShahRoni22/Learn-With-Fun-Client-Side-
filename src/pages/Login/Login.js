import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { DiGithubAlt } from "react-icons/di";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { loginGoogle } = useContext(AuthContext);
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

  return (
    <section className="py-5">
      <h3 className="text-light my-3">Please Login !</h3>
      <Form className="bg-light p-3 rounded">
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
          Login
        </Button>
      </Form>
      <p className="my-3 text-center text-light">
        New Here?{" "}
        <Link to="/register" className="text-light">
          Create a New Account
        </Link>
      </p>

      <div className="optional-login">
        <Button
          className="google btn-light w-100 my-2"
          onClick={handelGoogleLogin}
        >
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

export default Login;
