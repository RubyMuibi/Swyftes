
import Navbars from "../../Compunents/Navbar";
import Sidebar from "../../Compunents/Sidebar";
import { Container, Col, Row } from 'react-bootstrap';

import MobileSidebar from "../../Compunents/MobileSidebar";

export const Setting = () => {
  return (
    <>
 
         <Container fluid>
        <Row>
          <Navbars />
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar 
             active='setting' 
            />
               <MobileSidebar/>
          </Col>
          <Col
            md={10}
            style={{
              height: "90vh ",
              overflowY: "auto",
              paddingBottom: "80px",
            }}
          >
           


           <Container className='m-md-5 mt-3 m-0'>
      <Row>
        <Col md={5} className='drop-shadow border border-3 rounded-3' style={{ height: '400px' }}>
          <Row>
            <h3> <b>Profile</b></h3>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li>  <b>Name </b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <p> <b>Ruby Black</b></p>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li> <b> email address </b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <p> <b>ruby.b@acme.com</b></p>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li> <b>role</b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <p> <b>Admin</b></p>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li><b>monthly update</b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <input type='checkbox' />
            </div>
          </Row>
        </Col>
        <Col md={1}></Col>
        <Col md={5} className='mt-md-0 mt-4 drop-shadow border border-3 rounded-3' style={{ height: '400px' }}>
          <Row>
            <h3> <b>Company</b></h3>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li><b>company name</b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <p><b>ACME Inc.</b></p>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li style={{fontSize:'16px'}}><b>Base currency</b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
             
              <select className='w-50 p-2 border-0   ' >
    <option value="">Usd</option>
    <option >CAD</option>
    <option >EUR</option>
    <option >GBP</option>
   
  </select>
            </div>
          </Row>
          <Row className='d-flex align-items-center'>
            <div className='col-6'>
              <ul className='b'>
                <li style={{fontSize:'16px'}}><b>Swyftes+</b></li>
              </ul>
            </div>
            <div className='col-6 text-right'>
              <input type='checkbox' />
            </div>
          </Row>
        </Col>
      </Row>
    </Container>



          </Col>
        </Row>
      </Container>
    
    </>
  );
};
export default Setting;
