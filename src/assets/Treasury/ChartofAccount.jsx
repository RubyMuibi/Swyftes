
import { Container, Row, Col } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';
const ChartofAccount = () => {
  return (
    <>
   

          <Col md={12} className=' border0-1'>
          
            <Col className='border border-1 border-dark  p-3 rounded-3' style={{background:'#DCDCDC'}}>
              <Row style={{background:'#DCDCDC'}}>
                <p>
                  <b>TRANSACTION ID (TXID)</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center border-bottom'>
                  <select
                    className='w-100 rounded-3'
                    style={{
                      background: '#DCDCDC',
                      border: 'none',
                    }}
                  >
                    <option value='[100] cash'>[100] cash</option>
                    <option>[100] cash</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
              <Row>
                <p>
                  <b>Debited account</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <select
                    className='w-100 rounded-3'
                    style={{
                        background: '#DCDCDC',
                      border: 'none',
                    }}
                  >
                    <option value='[100] cash'>[100] cash</option>
                    <option>[100] cash</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
            </Col>
            <Col className='mt-3 border border-1 border-dark  p-3 rounded-3 mb-5'  style={{background:'#DCDCDC'}}>
              <Row>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <p>
                    <b>Fee Debited account</b>
                  </p>
                  <select
                    className='w-100 p-2 border-bottom border-0     rounded-0 '
                    style={{
                      background: '#DCDCDC',
               
                    }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>Grepper</option>
                    <option>i don't want to do that </option>
                      
                  </select>
                </div>
              </Row>
              <Row>
                <p>
                  <b>Fee Debited account</b>
                </p>
                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                  <p className='flex-grow-1'>
                    <b></b>
                  </p>
                  <select
                    className='w-100 p-2 border-1  rounded-3 '
                    style={{ background: '#DCDCDC', border: 'none' }}
                  >
                    <option value=''></option>
                    <option>gitHub</option>
                    <option>LinkedIn</option>
                    <option>money for ruby</option>
                    <option>meme ruby </option>
                      
                  </select>
                </div>
              </Row>
            </Col>
          </Col>


    
    
    </>
  )
}

export default ChartofAccount