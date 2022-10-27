import React, { useContext } from "react";
import logo from "../../img/logo.png";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../context/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillCartCheckFill } from "react-icons/bs";

//modal function
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="bg-primary text-light">
        <Modal.Title id="contained-modal-title-vcenter">
          Congratulations !
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <BsFillCartCheckFill className="display-5 text-primary m-3"></BsFillCartCheckFill>
          <h5>Thanks for choosing us!</h5>
        </div>
        <p className="my-3 fw-bold">Please Select Payment Option</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Bkash" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Nagad" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Rocket" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary">Continue Payment</Button>
        <Button onClick={props.onHide} variant="outline-danger">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const Checkout = () => {
  const { user } = useContext(AuthContext);

  const { title, price } = useLoaderData();
  //modal
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <section className="container mx-auto p-5 my-5 bg-light">
      <div className="checkout-header d-flex justify-content-center align-items-center gap-2 p-2 text-light">
        <img src={logo} height="40px" alt="" />
        <h5>Checkout</h5>
      </div>
      <Form className="my-3">
        <h5 className="my-3">Product Information</h5>
        <div className="form-address d-flex justify-content-between gap-2">
          <Form.Group className="mb-3 w-50">
            <Form.Label>Selected Course</Form.Label>
            <Form.Control defaultValue={title} readOnly />
          </Form.Group>

          <Form.Group className="mb-3 w-50">
            <Form.Label>Price</Form.Label>
            <Form.Control defaultValue={price} readOnly />
          </Form.Group>
        </div>
        <h5 className="my-3">Billing Address</h5>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control defaultValue={user?.displayName} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control defaultValue={user?.email} readOnly />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Address</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Enter Address 2</Form.Label>
          <Form.Control />
        </Form.Group>

        <div className="form-address d-flex justify-content-between">
          <Form.Group className="mb-3 w-25">
            <Form.Label>Country</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3 w-25">
            <Form.Label>State</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group className="mb-3 w-25">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </div>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Agree with terms and conditions" />
        </Form.Group>

        <Form.Group className="mb-5" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Shipping address is the same as my billing address"
          />
        </Form.Group>

        <Link className="course-btn" onClick={() => setModalShow(true)}>
          Continue Checkout
        </Link>
      </Form>

      {/* modal section  */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default Checkout;
