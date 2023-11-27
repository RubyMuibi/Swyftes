import  { useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [activeTab, setActiveTab] = useState(props.active);
  const handleDropdownClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <Container fluid className="p-0  mobilenone">
        <Row>
          <Col
            className="p-0 border flex-column  d-flex align-items-start justify-content-between "
            style={{ height: "90vh" }}
          >
            <div className="  w-100 mt-5 ">

              <Link to='/Overview'>
              <Dropdown className={activeTab === 'Overview' ? 'border' : ''}  style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className=" bg-white bg-light text-dark border-none text-uppercase"
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('Overview')}
                >
                  Overview
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>
              </Link>


              <Link to='/Treasury'>
              <Dropdown className={activeTab === 'Swyftes' ? 'border' : ''}  style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className=" bg-white bg-light text-dark border-none text-uppercase"
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('Swyftes')}
                >
                  Dashbord
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>
              </Link>

<Link to='/Fiat'>
              <Dropdown className={activeTab === 'fait' ? 'border' : ''} style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className="bg-white bg-light text-dark border-none text-uppercase"
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    fontSize:'15px',
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('fait')}
                >
                  Fiat on-and-off ramp
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>



              </Link>

            </div>
            <div className="  w-100">
              {" "} <div className=" border-top border-bottom w-100 pt-3 pb-3">
            
              <Link to='/Share'>
              <Dropdown className={activeTab === 'Share' ? 'border' : ''} style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className=" bg-white bg-light text-dark border-none text-uppercase"
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('Share')}
                >
                  Share
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>
              </Link>


              <Link to='/Team'>
              <Dropdown className={activeTab === 'team' ? 'border' : ''} style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className=" bg-white bg-light text-dark border-none text-uppercase"
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('team')}
                >
                  Team
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>
              </Link>

              <Link to='/Setting'>
              <Dropdown className={activeTab === 'setting' ? 'border' : ''} style={{ position: "relative" }}>
                <Dropdown.Toggle
                  variant="success"
                  className="bg-white bg-light text-dark border-none text-uppercase "
                  style={{
                    backgroundColor: "#ffff !important",
                    border: "none",
                  
                    borderRadius: "none !important",
                  }}
                  id="dropdown-basic"
                  onClick={() => handleDropdownClick('setting')}
                >
                 Settings
                </Dropdown.Toggle>

                <span
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "10px",
                    color:'black',
                    transform: "translateY(-50%) rotate(270deg)",
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

                
              </Dropdown>
              </Link>
              </div>


              <div className="pt-1">
                {/* <p className="text-center pt-2 mt-4" > <u> Learn More about swyftes </u></p> */}
                <p className="text-center mt-5" style={{textTransform:'initial'}} > <u> Twitter</u></p>
                <p className="text-center mb-5 " style={{textTransform:'initial'}} > <u>hi@swyftes.com </u></p>

              
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Sidebar;
