import { Row, Col } from 'react-bootstrap';
import './tabbar.css';

export const TabBar = ({ activeTab, onTabClick }) => {
  return (
    <Row className='backbg-tab mt-2 mobileblock w-75  m-auto ' >
      <Col  className='text-center margintopmobile'>
        <button
          className={
            
            activeTab === 'Assets' ? 'bgactiveTab-btn shadow ' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Assets')}
          style={{textTransform:'uppercase'}}
        >
      <b> <b>   Assets</b></b>
        </button>
      </Col>
      <Col className='text-center margintopmobile'>
        <button
          className={
            activeTab === 'Accounts' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Accounts')}
          style={{textTransform:'uppercase'}} >
        <b>  Accounts & Wallets</b>
        </button>
      </Col>
      <Col className='text-center margintopmobile' >
        <button
          className={
            activeTab === 'Cash' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Cash')}
          style={{textTransform:'uppercase'}}   >
   <b>     Cash flow</b>
        </button>
      </Col>

      <Col className='text-center margintopmobile' >
        <button
          className={
            activeTab === 'category' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('category')}
          style={{textTransform:'uppercase', fontSize:'9px'}}  >
  <b>     Chart of accounts & category </b>
        </button>
      </Col>
      {/* <Col className='text-center margintopmobile' >
        <button
          className={
            activeTab === 'Treasury' ? 'bgactiveTab-btn shadow' : 'bgTab-btn'
          }
          onClick={() => onTabClick('Treasury')}
          style={{textTransform:'uppercase'}}    >
      <b> Treasury Vault </b>
        </button>
      </Col> */}

    </Row>
  );
};

export default TabBar;