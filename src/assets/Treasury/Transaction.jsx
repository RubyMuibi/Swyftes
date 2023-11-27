
import  { useState } from 'react';


import { Container, Row, Col, Modal } from 'react-bootstrap';
import Detail from './Detail';
import ChartofAccount from './ChartofAccount';

const Transaction = () => {
  const [showAddTransactionModal, setShowAddTransactionModal] = useState(false);
  const [activeTab, setActiveTab] = useState('detail'); // Initialize activeTab with 'detail'

    const [showModal, setShowModal] = useState(false);

  
    const handleShowModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
  
    const handleShowAddTransactionModal = () => {
      setShowAddTransactionModal(true);
    };
  
    const handleCloseAddTransactionModal = () => {
      setShowAddTransactionModal(false);
    };
    const transactionData = [
    {
      asset: '7,329.61 USDC',
      value: '$7,329.61',
      from: '0x64...7b22',
      to: 'Payroll Wallet',
      category: 'Payroll',
      date: 'August 23, 2023',
    },
    {
        asset: '7,329.61 USDC',
        value: '$7,329.61',
        from: '0x64...7b22',
        to: 'Payroll Wallet',
        category: 'Payroll',
        date: 'August 23, 2023',
      },
     
      
    // Add more transactions as needed
  ];
  return (
    <>
      <Container className='mt-4 border border-3  rounded-3   drop-shadow'>
        <Row>
          <Col md={5}>
            <div className='d-flex mt-4'>
              <h3 className='text-black' style={{ textAlign: 'left' }}>
              <b>  Transactions </b>
              </h3>
             
            </div>
          </Col>
          <Col md={3}>
            <h3 className='text-black'></h3>
          </Col>
          <Col md={4}>
            <div className='d-flex mt-4'>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2 ms-4 p-2'
              >
                CSV Export
              </button>
              <button
                type='button'
                className='bg-transparent border-1 rounded-2 ms-4 p-2'
                onClick={handleShowModal} 
              
              >
                <img
                  src='./Frame.svg'
                  style={{ marginRight: '10px' }}
                  alt='Filter'
                />{' '}
                Filter
              </button>
            </div>
          </Col>
        </Row>
        <Row className='py-5 d-flex justify-content-center align-item-center'>
          <div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b>Asset</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b>value</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap'>
                    <b>from</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b>to</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap'>
                    <b>category</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap'>
                    <b>date</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactionData.map((transaction, index) => (
                  <tr key={index} className='text-nowrap'>
                    <th scope='row' onClick={handleShowAddTransactionModal}>{transaction.asset}</th>
                    <td onClick={handleShowAddTransactionModal}> <b>{transaction.value}</b></td>
                    <td onClick={handleShowAddTransactionModal}> <b>{transaction.from}</b></td>
                    <td onClick={handleShowAddTransactionModal}> <b>{transaction.to}</b></td>
                    <td className='text-center' onClick={handleShowAddTransactionModal}>
                      <button
                        type='button'
                        className='bg-transparent border-1 rounded-5 w-100'
                      >
                        {transaction.category}
                      </button>
                    </td>
                    <td  onClick={handleShowAddTransactionModal}>
                      {transaction.date}{' '}
                      
                      <img
                        src='/arrow.svg'
                        className=' ms-2 right-0'
                        alt='Arrow'
                       
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Row>
        <Row>
          <Col className='d-flex align-items-center  justify-content-end  mb-3'>
            <img src='/left.svg' alt='Left' />
            <img src='/right.svg' className='ps-3' alt='Right' />
          </Col>
        </Row>
      </Container>



      <Modal show={showModal} onHide={handleCloseModal}  className=' rounded-5 '>

<Modal.Body className='' style={{background:'#DCDCDC'}}>
<div className='text-center'>

  <p>Filter</p>
</div>

<p className='mt-2'><b>Keywoard</b></p>
<input type="text" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />
<p className='mt-2'> <b>Date</b></p>

<input type="date" data-date-inline-picker="true" className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}} />

<p className='mt-2'><b> Asset type </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>


<p className='mt-2'> <b> Wallet</b></p>
<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
  


  <p className='mt-2'> <b>From (Wallet)</b></p>
<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
  
  <p className='mt-2'> <b>To (Wallet)</b></p>
<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>

  <p className='mt-2'><b> CashFlow </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-2' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>


  <p className='mt-2'><b> Categories </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-1' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>



  <p className='mt-2'><b>   Chart of accounts </b> </p>

<select className='w-100 p-2 border-1  rounded-3 mb-2' style={{background:'#DCDCDC'}}>
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

   
   
   
   
   
   
   
   
  <Modal show={showAddTransactionModal} onHide={handleCloseAddTransactionModal} className='rounded-5'>
      <Modal.Body className='' style={{background:'#DCDCDC'}}>
        <Col className=''>
          <Row>
            <p className='text-capitalize'>
              <b>Time</b>
            </p>
          </Row>
          <Row className='mt-2 p-3'>
            <div className='border-bottom d-flex justify-content-between align-items-center text-capitalize'>
              <p onClick={() => setActiveTab('detail')}>
                <b>Detail</b> {activeTab === 'detail' && <img src='./circle.svg' alt="Active" />}
              </p>
              <p onClick={() => setActiveTab('chartOfAccount')}>
                <b>Chart of accounts & Category</b> {activeTab === 'chartOfAccount' && <img src='./circle.svg' alt="Active" />}
              </p>
            </div>
          </Row>
          
          {activeTab === 'detail' && <Detail />} {/* Render Detail Component */}
          {activeTab === 'chartOfAccount' && <ChartofAccount />} {/* Render Chart of Account Component */}
        </Col>
      </Modal.Body>
    </Modal>
   
    </>
  );
};

export default Transaction;




