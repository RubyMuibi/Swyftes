import  { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Transaction from "./Transaction";

const CashFlow = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <Container className="border drop-shadow  rounded-3  border-3 mt-3 pb-2" style={{width:'95%'}}>
        <Row className="" >
          <Col className="">
            <div className="d-flex align-items-center  justify-content-between ">
              <h3><b>Cash flow</b></h3>

              <p className="pt-2">
                Today’s balance <br /> <b> $233,344,444</b>
              </p>
            </div>
            <div>
              <button
                type="button"
                className="border rounded-3 border-dark bg-light p-1  pe-2"
                onClick={handleShowModal} 
              >
                <img src="/Frame.svg" style={{ margin: "5px" }} /> Filter
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mt-2 mb-4">
          <Col md={5} className=" mb-md-0 mb-5 ms-md-3   border border-3  rounded-3  drop-shadow-cashflow mobilewidth">
            <div className=" d-flex align-items-center  justify-content-between ">
              <h4> <b>Inflow </b></h4>
              <p className="mb-0">
                <b>$123,456,789</b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b>$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b style={{fontSize:'12px'}}>Uncategorized</b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b>$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b style={{fontSize:'12px'}}>Sales </b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b>$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b style={{fontSize:'12px'}}>Investment</b>
              </p>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className="border border-3  rounded-3   drop-shadow-cashflow me-0 mobilewidth">
          <div className="d-flex align-items-center  justify-content-between ">
              <h4><b>Outflow</b></h4>
              <p className="mb-0">
                <b >$123,456,789</b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b  >$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b style={{fontSize:'12px'}}>Uncategorized</b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b  >$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b style={{fontSize:'12px'}}>Payroll </b>
              </p>
            </div>

            <div className="d-flex align-items-center  justify-content-between ">
              <ul className="mb-0">
                {" "}
                <li>
                  {" "}
                  <b >$123,456,789</b>
                </li>
              </ul>
              <p className="mb-0">
                <b  style={{fontSize:'12px'}}>Marketing</b>
              </p>
            </div>
          </Col>
        </Row>
        <Row>

  <Col className='d-flex align-items-center  justify-content-end '>
  <img src="/left.svg" alt="" />
  <img src="/right.svg" className='ps-3' alt="" />
  </Col>
</Row>
      </Container>

      <Container style={{width:'95%'}} className='mt-3'>
        <Row>
            <Col>
            
            
            <Transaction/>
            
            </Col>
        </Row>
      </Container>


      <Modal show={showModal} onHide={handleCloseModal}  className=' rounded-5 '>

<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  <p>Filter</p>
</div>
<p className='mt-4'> <b>Date</b></p>
<input type="date" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />

<p className='mt-4'> <b> Wallet</b></p>

<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
  <p className='mt-4'><b> Categories </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-5' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
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

export default CashFlow;
