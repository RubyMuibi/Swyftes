
import { Container, Row, Col } from 'react-bootstrap';
const Detail = () => {
  return (
    <>
    
     <Col className='border border-1 border-dark bg-light p-3 rounded-5' style={{width:'95%' ,marginLeft:'2%'}}>
 <Row>
   <p>
     <b>TRANSACTION ID (TXID)</b>
   </p>
   <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
     <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
       <b>0x742d35Cc6634C0532925a3b844Bc454e4438f44e</b>
     </p>
     <p>
       <img src='./copyIcon.svg' />
     </p>
   </div>
 </Row>
 <Row>
   <p>
     <b>From</b>
   </p>
   <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
     <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
       <b>0x8Df45aAd5E67DfA4D63fB6a1BbD8b109B3e5e3fD</b>
     </p>
     <p>
       <img src='./copyIcon.svg' />
     </p>
   </div>
 </Row>
 <Row>
   <div className='d-flex  justify-content-between align-items-center '>
     <p>
       <b>to</b>
     </p>
     <p>
       <b>Payroll wallet</b>
     </p>
   </div>
   <div className='d-flex flex-wrap justify-content-between align-items-center '>
     <p className='flex-grow-1' style={{ fontSize: '1.1vw' }}>
       <b>0x8Df45aAd5E67DfA4D63fB6a1BbD8b109B3e5e3fD</b>
     </p>
     <p>
       <img src='./copyIcon.svg' />
     </p>
   </div>
 </Row>
 </Col>
 <Col className='border border-1 border-dark bg-light p-3 mt-4 rounded-5 '  style={{width:'95%' ,marginLeft:'2%'}}>
 <Row>
   <div className='d-flex justify-content-between align-items-center border-bottom'>
     <p>
       <b>Asset</b>
     </p>
     <p>
       <b>110 USDt</b>
     </p>
   </div>
 </Row>
 <Row>
   <div className='d-flex justify-content-between align-items-center border-bottom'>
     <p>
       <b>Value</b>
     </p>
     <p>
       <b>$110</b>
     </p>
   </div>
 </Row>
 <Row>
   <div className='d-flex justify-content-between align-items-center border-bottom'>
     <p>
       <b>
         Cost per unit <img src='./pencile.svg' />
       </b>
     </p>
     <p>
       <b>$20,000 | 1 USDT</b>
     </p>
   </div>
 </Row>
 <Row>
   <div className='d-flex justify-content-between align-items-center border-bottom'>
     <p>
       <b>
         Fees <img src='./pencile.svg' />
       </b>
     </p>
     <p>
       <b>$1 | 1 USDT</b>
     </p>
   </div>
 </Row>
 </Col>

 <p>
 <b>Note</b>
 </p>
 <textarea className='border border-1 border-dark w-100 rounded-5'></textarea>
 <div className='d-flex justify-content-center align-items-center'>
 <button
   type='button'
   className='p-2 bg-black text-white rounded-6 border-0 rounded-5 '
 >
   <img src='./uploadbutton.svg' className='me-2 px-2  ' />{' '}
   Transfer Money Now
 </button>
 </div>

 <div className='mt-3 d-flex justify-content-between align-items-center border border-1 p-1 mb-3 rounded-6'>
 <p className='my-0 '>
   <b>Receipt.pdf</b>
 </p>
 <p className='my-0 '>
   <img src='./codicon_trash.svg' />
 </p>
 </div>
    
    
    
    </>
  )
}

export default Detail