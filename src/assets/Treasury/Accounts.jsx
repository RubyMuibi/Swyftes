import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Pagination,
} from "react-bootstrap";

// import { Container, Row, Col } from 'react-bootstrap';
export const Accounts = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowBalanceModal = () => {
    setShowBalanceModal(true);
  };

  const handleCloseBalanceModal = () => {
    setShowBalanceModal(false);
  };

  const customerData = [
    {
      name: "USDC",
      Balance: "5,782,482.84",
    },
    {
      name: "CADC",
      Balance: "2,287,415.12",
    },
    {
      name: "BTC",
      Balance: "$15364",
    },
  ];
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = customerData.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Container className="drop-shadow border-3 rounded-3  border border-dark my-4 " style={{ width: "90%" ,height:'64vh' }}>
        <Row className="m-md-4 m-0 d-flex justify-content-between align-items-center">
          <Col xs={12} md={6}>
            <h3 className=" "> <b> Accounts/wallets </b></h3>
          </Col>
          <Col className="text-end">
            <button
              type="button"
              className="border rounded-3 border-dark bg-light p-1 ms-4 pe-2"
              style={{}}
              onClick={handleShowModal}
            >
              <img src="/pluss.svg" style={{ margin: "5px" }} /> Add Wallet
            </button>
          </Col>
        </Row>
        <Row className="m-4">
          <table className="table">
            <tbody>
              {customerData.map((customer, index) => (
                <div
                  key={customer.id}
                  className=" border-bottom  d-flex bg- w-100  align-items-center justify-content-between "
                  onClick={handleShowBalanceModal}    >
                  
                  <p className="with-dot mb-0"><b> {customer.name} </b></p>
                  <p className="mb-0" >
                   <b> {customer.Balance} </b>{" "}
                   <img src="/arrowright.svg" alt="" />
                  </p>
                </div>
              ))}
            </tbody>
          </table>
        </Row>
        <Row>

 
</Row>
<Row>
<Col className='d-flex align-items-center  justify-content-end ' style={{marginTop:'60px'}}>
  <img src="/left.svg" alt="" />
  <img src="/right.svg" className='ps-3' alt="" />
  </Col>
</Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} className=" rounded-5 ">
        <Modal.Body className="" style={{ background: "#DCDCDC" }}>
          <div className="text-center">
            <p><b> Add Wallet </b></p>
          </div>

          <p className="mt-4"> <b>Wallet Name</b></p>
          <input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

          <p className="mt-4"><b>Wallet Address</b></p>
          <input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

          <p className="mt-4"><b>Description</b></p>
          <textarea
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

          <div className="text-center mt-5 mb-3 ">
            <button className=" border-0 py-2 rounded-5   px-5 bg-dark text-light">
              Add wallet
            </button>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showBalanceModal}
        onHide={handleCloseBalanceModal}
        className=" rounded-5 "
      >
        <Modal.Body className="" style={{ background: "#DCDCDC" }}>
          <div className="d-flex justify-content-between align-items-center">
            <p>
              balance: <br />
              <b> $11,945,321,08 </b>
            </p>
            <div>
              {" "}
              <button className=" border py-2 rounded-2 px-3 bg-light text-dark">
                <img src="/fiillter.svg" alt="" /> Assets
              </button>
              <button className=" border ms-2 py-2 rounded-2 px-3 bg-light text-dark">
                <img src="/fiillter.svg" alt="" /> Transactions
              </button>
            </div>
          </div>
          <p>Wallet Name</p>
          <input
            type="text"
            placeholder="Paypal"
            className="w-100 p-2 border-1 text-center rounded-3 "
            style={{ background: "#DCDCDC" }}
          />
<p>Wallet Address</p>

<input
            type="text"
            placeholder="Paypal"
            className="w-100 p-2 border-1 text-center rounded-3 "
            style={{ background: "#DCDCDC" }}
            value='0x97930afa1640368ef7de973fa75f446f46901c2e'
          />







<p>Wallet Network</p>
          <input
            type="text"
            placeholder="Bitcoin"
            className="w-100 p-2 border-1 text-center rounded-3 "
            style={{ background: "#DCDCDC" }}
          />



<p className="mt-4">Description</p>
          <textarea
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />

          <div className="text-end  mb-3 ">
            <img src="/del.svg" alt="" />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Accounts;
