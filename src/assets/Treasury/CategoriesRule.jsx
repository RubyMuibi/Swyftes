import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

const CategoriesRule = () => {
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const handleShowCategoryModal = () => setShowCategoryModal(true);
    const handleCloseCategoryModal = () => setShowCategoryModal(false);
  return (
    <> <div  >
     
     
         <Row className='d-flex align-items-center ' onClick={handleShowCategoryModal}>
         {/* <p className=" text-nowrap with-dot ">
                             {" "}
                             <b> ssss</b>
                           </p> */}
            <Col md={6} className='  mt-2 d-flex align-items-center justify-content-between '>
            <div>
   
            </div>
            </Col>
            <Col md={6} >
            <div className=' d-flex  align-items-center  justify-content-end '>
            <p className="  text-nowrap with-dot ">
                             {" "}
                             <b style={{fontSize:'12px'}}> from | Payroll wallet</b>
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
            <p className="  text-nowrap with-dot ">
                             {" "}
                             <b style={{fontSize:'12px'}}> </b>
                           </p>
            </div>
            </Col>
    
            <Col>
            <div className=' d-flex  align-items-center  justify-content-end '>
            <p className="  text-nowrap with-dot ">
                             {" "}
                             <b style={{fontSize:'12px'}}>TO | sales wallet</b>
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
            <p className="  text-nowrap with-dot ">
                             {" "}
                             <b style={{fontSize:'12px'}}> </b>
                           </p>
            </div>
            </Col>
            <Col>
            <div className=' d-flex  align-items-center  justify-content-end '>
            <p className="  text-nowrap with-dot ">
                            
                             <b style={{fontSize:'12px'}}>from/to | accounts payable</b>
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
       </div>
       
       
       
       
       
       
       
       
       
       
       
       <Modal show={showCategoryModal} onHide={handleCloseCategoryModal}>
      <Modal.Body style={{background:'#DCDCDC'}}>
        

<p className='mt-4'><b>Category </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
            placeholder='PAYPAL'
          />
  
 
  <p className='mt-2'><b>Direction </b></p>

  <input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
            placeholder='TO'
          />
  <p className='mt-2'><b>Wallet </b></p>

  <input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
            placeholder='PAYROL WALLET'
          />




<div className="text-end  mb-3 mt-5">
            <img src="/del.svg" alt="" />
          </div>
    
 

        </Modal.Body>
       
      </Modal>
       
       
       
       </>
  )
}

export default CategoriesRule