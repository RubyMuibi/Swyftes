
import { useState } from "react";
// import {
//   InputGroup,
//   Dropdown,
//   DropdownButton,
//   // FormControl,
// } from 'react-bootstrap';
import Navbars from "../../Compunents/Navbar";
import MobileSidebar from "../../Compunents/MobileSidebar";
import Sidebar from "../../Compunents/Sidebar";
import './userradiobtn.css'
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
const Users = ({ checked, onChange }) => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false);

    const handleFilterClick = () => {
      setShowFilterModal(true);
    };
  
    const handleRowClick = () => {
      setShowSecondModal(true);
    };

  const tableData = [
    {
      Swyftes  : "S14",
      Name: "ACME INC.",
      Email: 'rubymuibi@gmail.com',
      dateCreated: "July 4, 2023",
      Role:'Admin'
    },
    {
      Swyftes  : "S15",
      Name: "ACME INC.",
      Email: 'Hello@gmail.com',
      dateCreated: "July 7, 2023",
      Role:'Admin'
    },
    {
      Swyftes  : "S13",
      Name: "ACME INC.",
      Email: 'jonny@gmail.com',
      dateCreated: "July 3, 2023",
      Role:'Admin'

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

            <Row className="mt-3 d-flex  align-content-center  justify-content-between ">
           
           <Col className=" d-flex  align-content-center  justify-content-between ">
      <h1><b>ACME INC.</b> </h1>
              <h1><b>S14</b> </h1>
              <button className="bg-light py-0 px-2" style={{fontSize:'14px'}}>VIEW </button>
              </Col>
            </Row>
            <Container
              className="drop-shadow  border  border-3  mt-3"
              style={{ width: "90%" }}
            >
              <Row className="d-flex justify-content-between align-items-center mt-3">
                <Col xs={6} md={6}>
                  <h1>
                    <b> Users </b>
                  </h1>
                </Col>
                <Col xs={6} className="text-end">
                  <button
                    type="button"
                    className="border rounded-3 border-dark bg-light p-2 ms-0 ms-md-4"
                    onClick={handleFilterClick}
         >
                    <img src="/Frame.svg" style={{ margin: "5px" }} /> Filter
                  </button>
                </Col>
              </Row>
              <Row>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col" className="text-nowrap">
                          <b> Swyftes  UID</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Name</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Email address</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Date Created</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Role</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                     
        
                     <tr key={index} >
                    
                          <td onClick={handleRowClick} style={{ fontSize: "12px" }}>
                            <b> {row.Swyftes}</b>
                          </td>
                          <td onClick={handleRowClick} style={{ fontSize: "12px" }}>
                           <b>{row.Name}</b>
                          </td>
                          <td onClick={handleRowClick} style={{ fontSize: "12px" }}>
                        <b>{row.Email}</b>
                          </td>
                          <td  onClick={handleRowClick} style={{ fontSize: "12px" }}>
                             <b>{row.dateCreated}</b>
                          </td>
                          <td onClick={handleRowClick} style={{ fontSize: "12px" }}>
                          <b>{row.Role}</b>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                            <b>

                         
      <input type="radio" name="gender" value="male"/>
      

                            </b>
                          </td>
                   
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Row>


              <Row>

<Col className='mb-3  d-flex align-items-center  justify-content-end ' style={{marginTop:'200px'}}>
<img src="/left.svg" alt="" />
<img src="/right.svg" className='ps-3' alt="" />
</Col>
</Row>










            </Container>
            {/* <BottomBar /> */}
          </Col>
        </Row>
      </Container>
      <Modal show={showFilterModal} onHide={() => setShowFilterModal(false)}     
        centered
  
    ClassName="modal-right"
        >
        
        <Modal.Body  style={{background:'#DCDCDC'}}>
        <div className='text-center'>

<p>Filter</p>
</div>
<p className='mt-4'> <b>Date Created</b></p>
<input type="date" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />

<p className='mt-4'> <b> User ID</b></p>
<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />


<p className='mt-2'> <b> Email </b></p>
<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

<p className='mt-2'><b> Role </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-5' style={{background:'#DCDCDC'}}>
  <option value=""></option>
  <option >Owner</option>
  <option >Admin</option>
  <option >Student</option>

</select>



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





























      <Modal    show={showSecondModal}
        onHide={() => setShowSecondModal(false)}    
        centered
  
    ClassName="modal-right"
        >
        
        <Modal.Body  style={{background:'#DCDCDC' , height:'450px'}}>

<div className="text-end mb-3">
    <img src="/cross.svg" alt=""  onClick={() => setShowSecondModal(false)}  />
</div>
<div className="border-bottom d-flex align-items-center  justify-content-between pb-2">
<p className="mb-0"><b>Login details</b></p>
<img src="/fontisto_date.svg" alt="" />
</div>


<div className="border-bottom d-flex align-items-center  justify-content-between pb-2 mt-5">
<p className="mb-0" style={{fontSize:'12px'}}><b>August 23, 2023 5:00 PM EST</b></p>
<p className="mb-0" style={{fontSize:'12px'}}><b>Calgary Canada|<u> 108.173.149.230</u></b></p>
</div>
<div className="border-bottom d-flex align-items-center  justify-content-between pb-2">
<p className="mb-0" style={{fontSize:'12px'}}><b>August 23, 2023 5:00 PM EST</b></p>
<p className="mb-0" style={{fontSize:'12px'}}><b>Calgary Canada|<u> 108.173.149.230</u></b></p>
</div>
<div className="border-bottom d-flex align-items-center  justify-content-between pb-2">
<p className="mb-0" style={{fontSize:'12px'}}><b>August 23, 2023 5:00 PM EST</b></p>
<p className="mb-0" style={{fontSize:'12px'}}><b>Calgary Canada|<u> 108.173.149.230</u></b></p>
</div>





        </Modal.Body>
        
      </Modal>
    </>
  );
};

export default Users