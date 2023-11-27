import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
const Addcategories = () => {
  return (
   <>
    <Row className='d-flex align-items-center '>
 {/* <p className=" text-nowrap with-dot ">
                     {" "}
                     <b> ssss</b>
                   </p> */}
    <Col className='  mt-2 d-flex align-items-center justify-content-between '>
    <div>
    <p className=" mb-0 text-nowrap with-dot ">
                     {" "}
                     <b style={{fontSize:'12px'}}> Expense</b>
                   </p>
    </div>
    </Col>
 </Row>
 <Row className='d-flex align-items-center '>
 {/* <p className=" text-nowrap with-dot ">
                     {" "}
                     <b> ssss</b>
                   </p> */}
    <Col className=' mt-2  d-flex align-items-center justify-content-between '>
    <div>
    <p className=" mb-0 text-nowrap with-dot ">
                     {" "}
                     <b style={{fontSize:'12px'}}> Income</b>
                   </p>
    </div>
    </Col>
 </Row>
 <Row className='d-flex align-items-center '>
 {/* <p className=" text-nowrap with-dot ">
                     {" "}
                     <b> ssss</b>
                   </p> */}
    <Col className=' mt-2  d-flex align-items-center justify-content-between '>
    <div>
    <p className=" mb-0 text-nowrap with-dot ">
                     {" "}
                     <b style={{fontSize:'12px'}}> Sales</b>
                   </p>
    </div>
    </Col>
 </Row>
 <Row style={{marginTop:'170px'}}>

<Col className='d-flex align-items-center  justify-content-end '>
<img src="/left.svg" alt="" />
<img src="/right.svg" className='ps-3' alt="" />
</Col>
</Row>

   
   </>
  )
}

export default Addcategories