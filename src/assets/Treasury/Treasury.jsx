import { Container, Col, Row } from 'react-bootstrap';
const Treasurry = () => {
  return (
    <Container className=' border rounded-3  border-3  drop-shadow border mt-4 '  style={{ height:'70vh',width:'95%'}}>
  
      <h3 className='text-black'><b>Treasury vault</b></h3>
   
    <Row className=' d-flex justify-content-center align-item-center ' >
      <p className='text-center mt-5 ' style={{textTransform:'initial'}}>
        Swyftes Treasury Vault let’s you grow your money through high-yield
        treasury products
      </p>
      <button
        type='button'
        className='bg-black border-0 rounded-5 p-2 text-white'
        style={{ width: '200px' ,marginTop:'30vh' }}
      >
        Coming soon
      </button>
    </Row>
  </Container>
  )
}

export default Treasurry