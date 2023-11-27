import { useState } from "react";
import Navbars from "../../Compunents/Navbar";
import Sidebar from "../../Compunents/Sidebar";
import MobileSidebar from "../../Compunents/MobileSidebar";
import './team.css'
import { Container, Row, Col, Modal, Button } from "react-bootstrap";

export const Team = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const customerData = [
    {
      name: "John Back",
      email: "John.b@acme.com",
    },
    {
      name: "John Back",
      email: "John.b@acme.com",
    },
    {
      name: "John Back",
      email: "John.b@acme.com",
    },
  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Navbars />
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar active="team" />
            <MobileSidebar />
          </Col>
          <Col
            md={10}
            style={{
              // height: "90vh ",
              overflowY: "auto",
              paddingBottom: "80px",
            }}
          >
            <Container
              className="drop-shadow rounded-3 border-3  border  my-5"
              style={{ width: "95%", height: "70vh " }}
            >
              <Row className="d-flex align-items-center justify-content-between">
                <Col>
                  <h1>Team</h1>
                </Col>
                <Col xs="auto">
                  <button
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      backgroundColor: "transparent",
                      borderRadius: "5px",
                    }}
                    className="p-2"
                    onClick={handleShowModal}
                  >
                    + Add Member
                  </button>
                </Col>
              </Row>
              <Row>
                <button
                  type="button"
                  className="bg-transparent rounded-2 ms-md-4 ms-0"
                  style={{
                    width: '300px',
                    border: "1px solid #000",
                  }}
                >
                  <img src="/tink.svg" className="p-3" />
                  Learn more about roles
                </button>
              </Row>
              <Row>
                <div className="table-container">
                  <table className="table">
                    <tbody>
                      {customerData.map((customer, index) => (
                        <div
                          key={customer.id}
                          className="d-flex    align-items-center justify-content-between "
                        >
                          {/* <ul >
                            <li>
                              {" "} */}
                              
                              <p className=" text-nowrap with-dot ">
                                {" "}
                                <b> {customer.name}</b>
                              </p>
                            {/* </li>
                          </ul> */}
                          
                          <p>{customer.email} </p>
                          <p className="text-align-center">
                            {/* <select className="w-100 border-0 bg-transparent ">
                              <option value="Admin"></option>
                              <option>Admin</option>
                              <option>Team Member</option>
                              <option>Accountant</option>
                            </select> */}
                            
<select className='w-100 p-2 border-1 border-0 bg-transparent rounded-3 mb-1' >
    <option value="">Admin</option>
    <option >police</option>
    <option >Team member</option>
    <option >Accountant</option>
    {/* <option >i don't want to do that </option> */}
  </select>

                          </p>
                          <p className="d-flex">
                            <button
                              type="button"
                              className="bg-black border-0 rounded-5 text-white p-2 "
                              style={{ width: "100%" ,marginRight:'25px'}}
                            >
                              Pending
                            </button>
                            <img src="./del.svg" />
                          </p>
                        </div>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}  className=' rounded-5 '>

<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  <p><b> Add Team</b></p>
</div>
<p className='mt-2'> <b>Name</b></p>
<input type="text" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />

<p className='mt-2'> <b> email</b></p>

<input type="text" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />
  <p className='mt-2'><b> Role </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >Admin</option>
    <option >Team member</option>
    <option >Accountant</option>
    {/* <option >i don't want to do that </option> */}
  </select>

  <p className='mt-2'><b> discription </b> </p>

<textarea name="" id="" cols="0" rows="3" className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}></textarea>

  


<div className='d-flex justify-content-between  align-items-center mt-5 mb-3 '>
  <button className=' border-0 py-2 rounded-5   px-5 bg-dark text-light'>
    Apply
    </button>
    
    <button className=' border-1 py-2 rounded-5   px-5 bg-light text-dark'>
Reset

    </button>
</div>
</Modal.Body>

</Modal>
    </>
  );
};

export default Team;
