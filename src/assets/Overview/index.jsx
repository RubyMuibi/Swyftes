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
import './modals.css'
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const Overview = () => {
    const [showFilterModal, setShowFilterModal] = useState(false);
    const handleFilterClick = () => {
        setShowFilterModal(true);
      };
  const tableData = [
    {
      syftid: "S14",
      companyName: "ACME INC.",
      totalUsers: 55,
      dateCreated: "July 4, 2023",
    },
    {
      syftid: "S15",
      companyName: "ACME INC.",
      totalUsers: 6,
      dateCreated: "July 7, 2023",
    },
    {
      syftid: "S13",
      companyName: "ACME INC.",
      totalUsers: 34,
      dateCreated: "July 3, 2023",
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
            <Container
              className="drop-shadow rounded-3  border  border-3  mt-5"
              style={{ width: "90%" }}
            >
              <Row className="d-flex justify-content-between align-items-center mt-3">
                <Col xs={6} md={6}>
                  <h1>
                    <b> Company </b>
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
                          <b> Swyftes ID</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Company name</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Total No. Users</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Date Created</b>
                        </th>
                        <th scope="col" className="text-nowrap">
                          <b>Status</b>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((row, index) => (
                     
        
                     <tr key={index}>
                    
                          <td style={{ fontSize: "12px" }}>
                           <Link to='/Users'> <b> {row.syftid}</b></Link>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                          <Link to='/Users'>  <b>{row.companyName}</b></Link>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                          <Link to='/Users'>   <b>{row.totalUsers}</b></Link>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                          <Link to='/Users'>     <b>{row.dateCreated}</b></Link>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                          <select className=' p-2 border-0  rounded-3 '  style={{width:'60%'}}>
  <option value="">Swyftes</option>
  <option >Swyftes</option>
  <option >Swyftes +</option>
  <option >Inactive</option>

</select>
                          </td>
                          <td style={{ fontSize: "12px" }}>
                            <b>

                            <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12l-10-10v7h-14v6h14v7z" />
                    </svg>
                                
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
<p className='mt-4'> <b>Date</b></p>
<input type="date" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />

<p className='mt-4'> <b> Swyftes  ID</b></p>
<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />


<p className='mt-2'> <b> Company </b></p>
<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

<p className='mt-2'><b> Status </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-5' style={{background:'#DCDCDC'}}>
  <option value=""></option>
  <option >Swyftes</option>
  <option >Swyftes +</option>
  <option >Inactive</option>

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
    </>
  );
};

export default Overview;
