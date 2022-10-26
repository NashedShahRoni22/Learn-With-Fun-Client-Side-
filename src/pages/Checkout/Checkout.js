import React from "react";
import logo from "../../img/logo.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Checkout = () => {
  return (
    <section className="container mx-auto py-5 my-5">
      <div className="checkout-header d-flex justify-content-center align-items-center gap-2">
        <img src={logo} height="40px" alt="" />
        <h5>Checkout</h5>
      </div>
      <hr />
      <Form className="my-5">
      <h5 className="my-3">Product Information</h5>
        <div className="form-address d-flex justify-content-between gap-2">
          <Form.Group className="mb-3 w-50">
            <Form.Label>Selected Course</Form.Label>
            <Form.Control defaultValue={"Learn HTML in 1 Hour"} readOnly />
          </Form.Group>

          <Form.Group className="mb-3 w-50">
            <Form.Label>Price</Form.Label>
            <Form.Control defaultValue={500} readOnly />
          </Form.Group>
        </div>
        <h5 className="my-3">Billing Address</h5>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control />
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Shipping address is the same as my billing address"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Continue Checkout
        </Button>
      </Form>
    </section>
  );
};

export default Checkout;
