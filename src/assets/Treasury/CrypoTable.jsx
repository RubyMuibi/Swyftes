

import { Container, Row, Col } from 'react-bootstrap';
import { MDBIcon } from 'mdb-react-ui-kit';
// import Table from 'react-bootstrap/Table';
// import proflepic from './Tabelicons/ethereum.svg';
export const CrypoTable = () => {
  const customerData = [
    {
      price: '$15364',
      name: 'Eth',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      price: '$15364',
      name: 'Eth',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      price: '$15364',
      name: 'Eth',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
    {
      price: '$15364',
      name: 'Eth',
      Percent: '70.44%',
      Balance: '$54236 Eth',
      Value: '$1235.2365',
    },
  ];

  return (
    <Container className=' border border-dark'>
      <Row className='m-4 d-flex justify-content-between align-items-center'>
        <Col xs={12} md={6}>
          <button
            type='button'
            className='border border-dark bg-dark text-white p-1'
            style={{ width: '50%' }}
          >
            <MDBIcon icon='plus' /> 
            Track Account/Wallet
          </button>
          <button
            type='button'
            className='border border-dark bg-light p-1 ms-4'
         
          >
            <MDBIcon icon='plus' /> 
            Change Currency
          </button>
        </Col>
        <Col className='text-end'>
          <h6>Total Balance</h6>
          <h5>$659295,2556</h5>
        </Col>
      </Row>
      <Row className='m-4'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>
                <b> Currency</b>
              </th>
              <th scope='col'>
                <b>Price</b>
              </th>
              <th scope='col'>
                <b> Percent %</b>
              </th>
              <th scope='col'>
                <b>Balance</b>
              </th>
              <th scope='col'>
                <b>Value</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {customerData.map((customer, index) => (
              <tr key={customer.id}>
                <td className='d-flex' >
                  <img
                    src='/ethereum.svg'
                    className='rounded-4 me-2'
                    alt=''
                    width='30px'
                    height='30px'
                  />
                  <p className='m-0'>{customer.name}</p>
                </td>
                <td className='text-secondary'>{customer.price}</td>
                <td className='text-secondary'>{customer.Percent}</td>
                <td className='text-secondary'>{customer.Balance}</td>
                <td className='text-secondary'>{customer.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Row>
    </Container>
  );
};

export default CrypoTable;