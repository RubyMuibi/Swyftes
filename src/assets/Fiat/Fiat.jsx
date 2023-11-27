import { useState } from 'react';


// import {
//   InputGroup,
//   Dropdown,
//   DropdownButton,
//   // FormControl,
// } from 'react-bootstrap';
import Navbars from '../../Components/Navbar';
import MobileSidebar from '../../Components/MobileSidebar';
import Sidebar from '../../Components/Sidebar';



import { Container, Row, Col } from 'react-bootstrap';
import './style.css';
const Fiat = () => {
//   const [selectedItem, setSelectedItem] = useState('Select an item');

//   const handleDropdownItemClick = item => {
//     setSelectedItem(item);
//   };
  return (
    <>


 <Container fluid>
        <Row>
          <Navbars />
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar 
             active='fait' 
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
            <Container className='drop-shadow  rounded-3  border  border-3 mt-3 ' style={{width:'90%'}}>
<Row className='d-flex justify-content-between align-items-center'>
  <Col xs={12} md={6}>
    <h1 className='text-black'><b>Fiat on-and-off ramp </b></h1>
  </Col>
  <Col className='text-end'>
    <button
      type='button'
      className='p-2'
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #000',
        borderRadius: '15px',
        // width: '70%',
      }}
    >
      Transaction History
    </button>
  </Col>
</Row>
<Row>
  <Col lg={3}></Col>
  <Col lg={6} className='p-4 '>
  <div className='mt-3 d-flex border-bottom align-items-center justify-content-between mb-3'>
    <div className='d-flex align-items-center'>
      <h6 className='text-upercase mb-0' >
        <b>Transak</b>
      </h6>
   
        <img src="/circle.svg"  className='ms-2 mb-1' />

    </div>
    <div className='d-flex align-items-center'>
      <h6 className='text-upercase mb-0' >
        <b>Paytrie (CANADA ONLY)</b>
      </h6>

       
  
    </div>
  </div>
    <Col className='border rounded-3 p-5' style={{ borderColor: 'black' }}>
    
      <Row className='p-1 border rounded-3 d-flex justify-content-between align-items-center'>
        <Col lg={8}>
          <h5>From</h5>
          <input
            placeholder='Enter an Amount'
            className='w-100 p-1 border-1  rounded-3'
          />{' '}
        </Col>
        <Col
          lg={4}
          className=' d-flex justify-content-between align-items-center'
        >
          <select
            className='w-100 p-2 mt-4 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>money for ruby</option>
            <option>ruby meme</option>
              
          </select>
        </Col>
        <p>1 USDC = 1.35 CAD</p>
      </Row>
      <div className='text-center'>
        <img
          src='./Exchange.svg'
          className='my-2'
        
        />
      </div>
      <Row className='p-2 border rounded-4 d-flex justify-content-between align-items-center'>
        <Col lg={8}>
          <h5>TO</h5>
          <input
            placeholder='Enter an Amount'
            className='w-100 p-2 border-1  rounded-3'
          />{' '}
        </Col>
        <Col lg={4}>
          <select
            className='w-100 p-2 mt-4 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>money for ruby</option>
            <option>mememe ruby</option>
              
          </select>
        </Col>
      </Row>
      <Row className='mt-2'>
        <h6>Method</h6>
        <Col lg={12}>
          {' '}
          <select
            className='w-100 p-2 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>money for ruby</option>
            <option>do you have meme</option>
              
          </select>
        </Col>
      </Row>
      <button
        type='button'
        className='mt-3 bg-dark text-light border-0   rounded-5 '
        style={{
        
          marginLeft: '100px',
          width: '50%',
          padding: '10px',
        }}
      >
        continue
      </button>
    </Col>
  </Col>
  <Col lg={3}></Col>
</Row>
</Container>
          
            {/* <BottomBar /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Fiat;


{/* <Container className='drop-shadow m-5 '>
<Row className='d-flex justify-content-between align-items-center'>
  <Col xs={12} md={6}>
    <h1 className='text-black'>Fiat on-and-off ramp</h1>
  </Col>
  <Col className='text-end'>
    <button
      type='button'
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #000',
        borderRadius: '15px',
        width: '30%',
      }}
    >
      Transaction History
    </button>
  </Col>
</Row>
<Row>
  <Col lg={3}></Col>
  <Col lg={6} className='p-4'>
    <Col className='border p-5' style={{ borderColor: 'black' }}>
      <Row className='p-1 border rounded-4 d-flex justify-content-between align-items-center'>
        <Col lg={8}>
          <h5>From</h5>
          <input
            placeholder='Enter an Amount'
            className='w-100 p-2 border-1  rounded-3'
          />{' '}
        </Col>
        <Col
          lg={4}
          className=' d-flex justify-content-between align-items-center'
        >
          <select
            className='w-100 p-2 mt-4 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>money for ruby</option>
            <option>nope</option>
              
          </select>
        </Col>
        <p>1 USDC = 1.35 CAD</p>
      </Row>
      <div className='d-flex justify-content-between align-items-center'>
        <img
          src='./Exchange.svg'
          className='my-2'
          style={{ marginLeft: '180px' }}
        />
      </div>
      <Row className='p-2 border rounded-4 d-flex justify-content-between align-items-center'>
        <Col lg={8}>
          <h5>TO</h5>
          <input
            placeholder='Enter an Amount'
            className='w-100 p-2 border-1  rounded-3'
          />{' '}
        </Col>
        <Col lg={4}>
          <select
            className='w-100 p-2 mt-4 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>ruby's social</option>
            <option>love</option>
              
          </select>
        </Col>
      </Row>
      <Row className='mt-4'>
        <h6>Method</h6>
        <Col lg={12}>
          {' '}
          <select
            className='w-100 p-2 border-1  rounded-3 '
            style={{ background: '#fff' }}
          >
            <option value=''></option>
            <option>gitHub</option>
            <option>LinkedIn</option>
            <option>love</option>
            <option>ruby</option>
              
          </select>
        </Col>
      </Row>
      <button
        type='button'
        className='mt-4'
        style={{
          backgroundColor: '#000',
          color: '#fff',
          border: 'none',
          borderRadius: '22px',
          marginLeft: '100px',
          width: '50%',
          padding: '10px',
        }}
      >
        continue
      </button>
    </Col>
  </Col>
  <Col lg={3}></Col>
</Row>
</Container> */}