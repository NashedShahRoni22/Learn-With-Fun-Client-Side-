import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const { userRegistration, loginGoogle, loginGithub, verifyEmail, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // handel google login
  const handelGoogleLogin = () => {
    loginGoogle()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate('/');
        toast.success('User Registered Successfully!');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  // handel github login
  const handelGithubLogin = () => {
    loginGithub()
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate('/');
        toast.success('User Registered Successfully!');
      })
      .catch((e) => {
        console.error(e);
      });
  };

  //handel user registration
  const handelRegistration =(e)=>{
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoURL = form.photoURL.value;

    console.log(email, password, name, photoURL);

    userRegistration(email,password)
    .then(res=>{
      const user = res.user;
      console.log(user);
      emailVerify();
      navigate('/login');
      form.reset();
      userProfileUpdate(name, photoURL);
      toast.success('User Registered Successfully!');
    })
    .catch(e=>{
      console.error(e);
    })
  }
  //verify user email address
  const emailVerify =()=>{
    verifyEmail()
    .then(()=>{
      console.log("Verification email sent!");
    })
    .then(e=>{
      console.error(e);
    })
  }
  //update user profile
  const userProfileUpdate =(name, photoURL)=>{
    const profile ={
      displayName:name,
      photoURL:photoURL,
    }
    updateUserProfile(profile)
    .then(()=>{
      console.log("Profile updated!");
    })
    .catch(e=>{
      console.error(e);
    })
  }

  return (
    <section className="py-5 container">
      <h3 className="my-3">Please Register !</h3>
      <Form className="bg-light p-3 rounded" onSubmit={handelRegistration}>
        <Form.Group className="mb-3" controlId="formUserName">
          <Form.Label>
            {" "}
            <strong>Enter Name</strong>{" "}
          </Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter name" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhotoUrl">
          <Form.Label>
            {" "}
            <strong>Enter Photo URL</strong>{" "}
          </Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Enter Photo URL" required/>
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

        <Button variant="outline-primary" type="submit" className="w-100">
          Register
        </Button>
      </Form>
      <p className="my-3 text-center">
        Already Registered?{" "}
        <Link to="/login" className="text-dark">
          Please Login
        </Link>
      </p>

      <div className="optional-login">
        <Button
          variant="outline-success"
          className="w-100 my-2"
          onClick={handelGoogleLogin}
        >
          <BsGoogle></BsGoogle>
          <span className="ms-2">Sign In with Google</span>
        </Button>
        <Button 
        variant="outline-dark"
        className="w-100 my-2"
        onClick={handelGithubLogin}
        >
          <BsGithub></BsGithub>
          <span className="ms-2">Sign In with Github</span>
        </Button>
      </div>
    </section>
  );
};

export default Register;
