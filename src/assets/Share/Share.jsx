import { useState } from "react";
import Navbars from "../../Compunents/Navbar";
import Sidebar from "../../Compunents/Sidebar";
import MobileSidebar from "../../Compunents/MobileSidebar";

import { Container, Row, Col, Modal, Button } from "react-bootstrap";

export const Share = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondaryModal, setShowSecondaryModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowSecondaryModal = () => {
    setShowSecondaryModal(true);
  };

  const handleCloseSecondaryModal = () => {
    setShowSecondaryModal(false);
  }
  const data = [
    { name: 'ali', key: 'fZmlK1MmnvSSu6kr0N5', Date: 'Sep 24, 2023', handle: '@mdo' },
    { name: 'Faizan', key: 'gZmlK1MmnvSSu6kr0N5', Date: 'Sep 24, 2023', handle: '@fat' },

  ];

  return (
    <>
      <Container fluid>
        <Row>
          <Navbars />
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar active="Share" />
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
                  <h1><b>Share</b></h1>
                </Col>
                <Col xs="auto">
                  <button
                    style={{
                      width: "100%",
                      border: "1px solid #000",
                      backgroundColor: "transparent",
                      borderRadius: "5px",
                      
                    }}
                    className="p-2 text-uppercase "
                    onClick={handleShowModal}
                  >
                    <b>+ Create New Key</b>
                  </button>
                </Col>
              </Row>
     
              <Row>
              


              <div className="table-responsive">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Key</th>
            <th scope="col">date created</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <th scope="" onClick={handleShowSecondaryModal}>{item.name}</th>
              <td onClick={handleShowSecondaryModal} style={{}}><b>{item.key}</b></td>
              <td onClick={handleShowSecondaryModal}><b>{item.Date}</b></td>
              <td onClick={handleShowSecondaryModal}> 
              <img src="/arrowright.svg" alt="" />
                              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>






              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Modal dal show={showModal} onHide={handleCloseModal}  className=' rounded-5 '>

<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  {/* <p><b> Add Team</b></p> */}
</div>
<p className='mt-2'> <b>Name</b></p>
<input type="text" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />


  <p className='mt-2'><b> TYPE </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >View only</option>
    <option >Allow Editing</option>
   
    {/* <option >i don't want to do that </option> */}
  </select>

  

<div className='text-center mt-5 mb-3 '>
  <button className=' border-0 py-2 rounded-5   px-5 bg-dark text-light text-uppercase '>
 <b> generate new key</b>
    </button>
    

</div>
</Modal.Body>

</Modal>








<Modal show={showSecondaryModal} onHide={handleCloseSecondaryModal} className=' rounded-5 '>
<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  {/* <p><b> Add Team</b></p> */}
</div>
<p className='mt-2'> <b>Name</b></p>
<input type="text" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />


  <p className='mt-2'><b> TYPE </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >View only</option>
    <option >Allow Editing</option>
   
    {/* <option >i don't want to do that </option> */}
  </select>

  <p className='mt-1'><b> Link </b> </p>

  <div className="border p-2 rounded-3 d-flex align-items-center  justify-content-between ">
<p className="mb-0"style={{textTransform:'initial'}}><b>swyftes.com/link/gZmlK1MmnvSSu6kr0N5</b></p>
<img src="/ph_copy-light.svg" alt="" />
  </div>

  <p className='mt-1'><b> CODE </b> </p>

<div className="border p-2 rounded-3 d-flex align-items-start  justify-content-between " style={{height:"150px"}}>
<p className="mb-0"style={{textTransform:'initial'}}><b>swyftes.com/link/gZmlK1MmnvSSu6kr0N5</b></p>
<img src="/ph_copy-light.svg" alt="" />
</div>

<div className=' mt-2 mb-3 text-end'>
<img src="/del.svg" alt="" />


</div>
</Modal.Body>
      </Modal>
    </>
  );
};

export default Share;
