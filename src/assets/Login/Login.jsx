
import { useState } from "react";
import ConfrimLogin from "./ConfrimLogin";
// import {
//   InputGroup,
//   Dropdown,
//   DropdownButton,
//   // FormControl,
// } from 'react-bootstrap';
import Navbars from "../../Compunents/Navbar";
import MobileSidebar from "../../Compunents/MobileSidebar";
import Sidebar from "../../Compunents/Sidebar";

import { Container, Row, Col } from "react-bootstrap";
const Login = () => {
    const [email, setEmail] = useState("");
    const [showWelcome, setShowWelcome] = useState(false); // Add state to control rendering
  
    const handleInputChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleContinueClick = () => {
      setShowWelcome(true); // Set state to show the Welcome component
    };
  return (
    <>    <Container fluid>
    <Row>
      <Navbars />
    </Row>
    <Row>
      <Col md={2}>
        <Sidebar active="Overview" />
        <MobileSidebar />
      </Col>
      <Col
        md={10}
        style={{
          height: "90vh ",
          overflowY: "auto",
          paddingBottom: "80px",
        }}
      >
        <Container
          className="drop-shadow rounded-3   border  border-3  mt-5 "
          style={{ width: "65%" }}
        >
          {showWelcome ? (
            <ConfrimLogin email={email} />
          ) : (
            <>
              <h2 style={{fontStyle:'italic' , fontWeight:'700' ,textTransform:'capitalize'}} >
          
                   Swyftes
           
              </h2>
              <div className="text-center">
                <p className="mt-5">
               <b style={{textTransform:'initial'}}>   Enter your email address to log in or create an account </b>
                </p>
                <input
                  type="text"
                  placeholder="you@example.com"
                  value={email}
                  onChange={handleInputChange}
                  className="p-2 border rounded-3 text-center mt-5"
                  style={{ width: "70%" }}
                />
                <p className="mt-5" style={{textTransform:'initial'}}>
                  By continuing, you agree to our Terms of Use and Privacy policy.
                </p>
                <button
                  onClick={handleContinueClick}
                  className="bg-dark text-light px-5 py-2 rounded-5 mb-5 border-0"
                >
                  continue
                </button>
              </div>
            </>
          )}
        </Container>
      </Col>
    </Row>
  </Container>
</>
);
};

export default Login;




























