import { Container, Row, Col } from 'react-bootstrap';
// import eye from '../Tabelicons/eye.svg';
// import plus from '../Tabelicons/plus.svg';
// import Eth from '../Tabelicons/ethereum.svg';
// import clipboard from '../Tabelicons/copy.svg';
// import Rightarrow from '../Tabelicons/right-arrow.svg';
export const Wallets = () => {

  const walletData = [
    { id: 1, name: 'First', address: '66554...ed32' },
    { id: 2, name: 'Second', address: '66554...ed33' },
    // Add more wallet data as needed
  ];
  return (
    <>
      <Container className='mt-5 border border-dark'>
        <Row className='d-flex justify-content-between align-items-center'>
          <Col className='d-flex justify-content-between align-items-center p-3'>
            <p className=''>
              {' '}
              <img src='/eye.svg' width='25px' />
              Tracked Wallets
            </p>
            <h3 className='fs-5 bg-black p-2 text-white'>
              <img src="/plus.svg" width='25px' />
              Tracked Account/Wallets{' '}
              <span className=' p-1 rounded-4 pink-text'>New</span>
            </h3>
          </Col>
          <Col className='text-end'>
            <h5>$1,539,625.65</h5>
          </Col>
        </Row>
        {walletData.map(wallet => (
          <Row key={wallet.id} className='bg-black text-white m-3'>
            <Col className='d-flex justify-content-start align-items-center'>
              <img src='/ethereum.svg' width='25px' />
              <h3 className='ms-2 fs-3 pt-1 text-align-center'>{wallet.name}</h3>
            </Col>
            <Col className='d-flex justify-content-center align-items-center'>
              <h6 className='fs-6 pt-3 text-align-center'>{wallet.address}</h6>
              <img src='/copy.svg' className='m-2' width='25px' />
            </Col>
            <Col className='d-flex justify-content-end align-items-center'>
              <h6 className='fs-6 pt-3 text-align-center'>{wallet.address}</h6>
              <img src='/right-arrow.svg' className='m-2' width='25px' />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
export default Wallets;