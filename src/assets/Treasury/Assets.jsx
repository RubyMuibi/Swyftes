

import  { useState } from 'react';
import { Container, Row, Col, Modal, Button, Pagination } from 'react-bootstrap';



// import { Container, Row, Col } from 'react-bootstrap';
export const Assets = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableIndex, setTableIndex] = useState(0);

  const handleShowNextTable = () => {
    setTableIndex(prevIndex => prevIndex + 1);
  };

  const handleShowPreviousTable = () => {
    setTableIndex(prevIndex => prevIndex - 1);
  };
  // const [currentPage, setCurrentPage] = useState(1);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [itemsPerPage] = useState(3);
  const customerData = [
    {
      name: 'USDC',
      Balance: '5,782,482.84',
      Value: '$5,782,482.84',
      price: '$1',
      Percent: '44.87%',
    },
    {
      name: 'CADC',
      Balance: '2,287,415.12',
      price: '$15364',
      Percent: '70.44%',
      Value: '$1235.2365',
    },
    {
      name: 'BTC',
      price: '$15364',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
   
  ];
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = customerData.slice(indexOfFirstItem, indexOfLastItem);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <>
    <Container className=' drop-shadow rounded-3  border-3 border border-dark my-4 pb-5 ' style={{width:'90%'}}>
      <Row className='m-4 d-flex justify-content-between align-items-center'>
        <Col xs={6} md={6}>
          <h1><b> Assets </b></h1>
        </Col>
        <Col xs={6} className='text-end'>
          <button
            type='button'
            className='border rounded-3 border-dark bg-light p-2 ms-0 ms-md-4'
            
            onClick={handleShowModal} 
          >
            <img src='/Frame.svg' style={{ margin: '5px' }} /> Filter
          </button>
        </Col>
      </Row>
      <Row className='mb-2'>
<div className="table-container">

        <table className='table'>
          <thead>
            <tr>
              <th className=' text-uppercase  text-nowrap' scope='col'>
                <b> Asset</b>
              </th>
              <th className=' text-uppercase  text-nowrap' scope='col'>
                <b>Balance</b>
              </th>
              <th className=' text-uppercase  text-nowrap' scope='col'>
                <b> Value</b>
              </th>
              <th  className=' text-uppercase  text-nowrap' scope='col'>
                <b>Current Price</b>
              </th>
              <th className=' text-uppercase text-nowrap ' scope='col'>
                <b> %</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={customer.id}>
                
                <td className='text-secondary text-nowrap '>
                   <p className=" text-nowrap with-dot ">
                                {" "}
                                <b> {customer.name}</b>
                              </p>
               
                              </td>
                               <td className='text-secondary text-nowrap '> <b>{customer.price}</b></td>
                <td className='text-secondary text-nowrap'><b> {customer.Percent} </b></td>
                <td className='text-secondary text-nowrap'><b>{customer.Balance}</b></td>
                <td className='text-secondary text-nowrap'><b>{customer.Value}</b></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      </Row>
<Row>

  <Col className='d-flex align-items-center  justify-content-end '>
  <img src="/left.svg" alt="" />
  <img src="/right.svg" className='ps-3' alt="" />
  </Col>
</Row>


      {/* <Row className='justify-content-center'>
        <Pagination>
          {[...Array(Math.ceil(customerData.length / itemsPerPage)).keys()].map((index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Row> */}
    </Container>


<Modal show={showModal} onHide={handleCloseModal}  className=' rounded-5 '>

<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  <p> <b>Filter </b></p>
</div>

<p className='mt-4'><b>Asset type </b></p>

<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
  <p className='mt-4'><b> Wallet </b></p>

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

export default Assets;