import React, { useState } from "react";
import { Col, Container, Row, Modal, Button } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const Navbars = () => {
  const [modalShow, setModalShow] = useState(false);
  const [newModalShow, setNewModalShow] = useState(false); // Step 1

  const [email, setEmail] = useState(""); // Step 1

  const handleContinueClick = () => {
    setModalShow(false);
    setNewModalShow(true);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value); // Step 2
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col className=" p-0 border-bottom d-flex align-items-center justify-content-between">
            <div className=" d-flex align-items-center justify-content-between">
              <img src="/Group 1000003004.svg" alt="" />
            </div>
            <div
              className="border-left d-flex align-items-start justify-content-between"
              style={{ borderLeft: "0.6px solid black" }}
            >
              <Dropdown style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className="bg-white bg-light text-dark border-none"
                  style={{
                    textAlign: "start",
                    backgroundColor: "#ffff !important",
                    border: "none",
                    height: "50px",
                    borderRadius: "none !important",
                    width: "200px",
                  }}
                  id="dropdown-basic"
                >
                  ACME Inc.
                  <br />
                  name
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    transform: "translateY(-50%)",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1.208 5.293a1 1 0 0 1 1.498-1.32L8 9.586l5.293-5.293a1 1 0 1 1 1.497 1.32l-6 6a1 1 0 0 1-1.415 0l-6-6z" />
                  </svg>
                </span>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Log Out </p>
                      <img src="/Vector.svg" alt="" />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-2"
                    onClick={() => setModalShow(true)}
                  >
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0">Create New </p>
                      <img src="/createplus.svg" alt="" />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2>Swyftes</h2>
          <div className="text-center">
            <p className="mt-5">
              Enter your email address to log in or create an account
            </p>

            <input
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={handleInputChange}
              className="p-2 border rounded-3 text-center mt-5 "
              style={{ width: "70%" }}
            />

            <p className="mt-5">
              By continuing, you agree to our Terms of Use and Privacy policy.
            </p>

            <button
              onClick={handleContinueClick}
              className="bg-dark text-light px-5 py-2 rounded-5 mb-5  border-0 "
            >
              continue
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
         show={newModalShow} onHide={() => setNewModalShow(false)}>
        <Modal.Body>
          <h2>Swyftes</h2>
          <div className="text-center">
            <p className="mt-5">
              Confirm your email by entering the code sent to
               : {email}
            </p>

            <input
              type="text"
              placeholder="code"
              
              className="p-2 border rounded-3 text-center mt-5 "
              style={{ width: "70%" }}
            />

            <p className="mt-5">
            I didn’t receive the code <u> Resend </u>
            </p>

            <button
              onClick={handleContinueClick}
              className="bg-dark text-light px-5 py-2 rounded-5 mb-5  border-0 "
            >
              continue
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Navbars;
