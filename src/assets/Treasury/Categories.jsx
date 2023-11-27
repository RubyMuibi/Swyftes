import { useState } from 'react';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import CategoriesRule from './CategoriesRule';
import Addcategories from './Addcategories';


const Categories = () => {
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [activeTab, setActiveTab] = useState('addCategories');
  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);
const [showAddRuleModal, setShowAddRuleModal] = useState(false);

  const handleShowAccountModal = () => setShowAccountModal(true);
  const handleCloseAccountModal = () => setShowAccountModal(false);

  const handleShowDetail = () => {
    setShowDetail(true);
    setActiveTab('addCategories');
  }
  const handleShowAddCategoryModal = () => setShowAddCategoryModal(true);
  const handleCloseAddCategoryModal = () => setShowAddCategoryModal(false);
  
  const handleShowAddRuleModal = () => setShowAddRuleModal(true);
  const handleCloseAddRuleModal = () => setShowAddRuleModal(false);
  const handleCloseDetail = () => setShowDetail(false);

  const handleShowCategoryModal = () => setShowCategoryModal(true);
  const handleCloseCategoryModal = () => setShowCategoryModal(false);

  const handleShowCategoriesRuleComponent = () => setActiveTab('categoriesRule');
  const handleCloseCategoriesRuleComponent = () => setActiveTab(null);

  const handleShowAddCategoriesComponent = () => setActiveTab('addCategories');
  const handleCloseAddCategoriesComponent = () => setActiveTab(null);

  const accounts = [
    {
      code: '100',
      accountName: 'Cash',
      accountType: 'Bank',
      description: 'Cash in CIBC Bank',
    },
    {
        code: '300',
        accountName: 'Csash',
        accountType: 'Bank',
        description: 'Cash in pak Bank',
      },
      {
        code: '100',
        accountName: 'Cash',
        accountType: 'Bank',
        description: 'Cash in CIBC Bank',
      },
     
    // Add more accounts as needed
  ];

  return (
    <>
      <Container className='m-md-5 mt-3 m-0'>
        <Row>
          <Col md={5} className='drop-shadow-cashflow rounded-3 border border-3 ' style={{ height: '400px' }}>
            <Row className='mt-3'>
              <Col className='d-flex align-items-center justify-content-between '>
                <p className='mb-0'><b>chart of accounts</b></p>
                <button className=' text-uppercase p-1 ' style={{background:'#fff'}} onClick={handleShowAccountModal} ><b> + Add Account</b></button>
              </Col>
            </Row>
<div className='table-responsive'>
            <table className='table'>
              <thead>
                <tr>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b className='text-capitalize'>Code</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b className='text-capitalize'>account name</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap'>
                    <b className='text-capitalize'>account type</b>
                  </th>
                  <th scope='col' className='text-capitalize text-nowrap '>
                    <b className='text-capitalize'>description</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index} className='text-nowrap'>
                    <th onClick={handleShowDetail} scope='row' style={{fontSize:'10px'}}><b>{account.code}</b></th>
                    <td onClick={handleShowDetail} style={{fontSize:'10px'}}><b>{account.accountName}</b></td>
                    <td onClick={handleShowDetail} style={{fontSize:'10px'}}><b>{account.accountType}</b></td>
                    <td onClick={handleShowDetail} style={{fontSize:'10px'}}><b>{account.description}</b></td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <Row style={{marginTop:'150px'}}>

<Col className='d-flex align-items-center  justify-content-end '>
<img src="/left.svg" alt="" />
<img src="/right.svg" className='ps-3' alt="" />
</Col>
</Row>

          </Col>
          <Col md={1}></Col>
          <Col md={5} className='mt-md-0 mt-4 rounded-3 drop-shadow-cashflow border border-3' style={{ height: '400px' }}>
            <Row className='mt-3'>
            <Col className='d-flex align-items-center justify-content-between '>
            <p className=' text-uppercase mb-0 '><b className='text-uppercase'>category</b></p>
            <div style={{ textAlign: 'center'}}>
  {activeTab === 'categoriesRule' ?
    <button className='text-uppercase p-1' style={{background:'#fff'}} onClick={handleShowAddRuleModal}>
      <b>+ Add Rule</b>
    </button>
    :
    <button className='text-uppercase p-1' style={{background:'#fff'}} onClick={handleShowAddCategoryModal}>
      <b>+ Add Category</b>
    </button>
  }
</div>
              </Col>
            
              
            </Row>
            {/* <Row className='d-flex align-items-center'>
     
               <div className='mt-3 d-flex border-bottom  align-items-center  justify-content-between  '>
                <div>
<h6 className='text-upercase' onClick={handleShowAddCategoriesComponent }  ><b>Categories</b></h6>
                </div>
                <div>


              
                <h6 className='text-upercase' onClick={handleShowCategoriesRuleComponent} ><b>Category rules</b></h6>
                
                </div>
               </div>
               
            </Row>




            {activeTab === 'categoriesRule' && <CategoriesRule />} 
      {activeTab === 'addCategories' && <Addcategories />}  */}


<Row className='d-flex align-items-center'>
  <div className='mt-3 d-flex border-bottom align-items-center justify-content-between'>
    <div className='d-flex align-items-center'>
      <h6 className='text-upercase mb-0' onClick={handleShowAddCategoriesComponent}>
        <b>Categories</b>
      </h6>
      {activeTab === 'addCategories' && (
        <img src="/circle.svg" alt="Categories" className='ms-2 mb-1' />
      )}
    </div>
    <div className='d-flex align-items-center'>
      <h6 className='text-upercase mb-0' onClick={handleShowCategoriesRuleComponent}>
        <b>Category rules</b>
      </h6>
      {activeTab === 'categoriesRule' && (
        <img src="/circle.svg" alt="Category Rules" className='ms-2 mb-1' />
      )}
    </div>
  </div>
</Row>


{activeTab === 'categoriesRule' && <CategoriesRule />} 
      {activeTab === 'addCategories' && <Addcategories />}  


{/* 
            <Row style={{marginTop:'170px'}}>

<Col className='d-flex align-items-center  justify-content-end '>
<img src="/left.svg" alt="" />
<img src="/right.svg" className='ps-3' alt="" />
</Col>
</Row> */}
          </Col>
        </Row>
      </Container>



      <Modal show={showAccountModal} onHide={handleCloseAccountModal}>
       
        <Modal.Body style={{background:'#DCDCDC'}}>
        <div className='text-center' >

  <p className=' text-uppercase '> <b>Add Account </b></p>
</div>

<p className='mt-4'><b>code </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />
  <p className='mt-2 text-uppercase'><b> account name </b></p>
  <input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />
            <p className='mt-2 text-uppercase'><b> account type </b></p>
<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value="">Asset</option>
    <option >Expense</option>
    <option >Equity</option>
    <option >Liability</option>
    <option >Revenue</option>
  </select>
  <p className='mt-2 text-uppercase'><b> description </b></p>
   
  <textarea
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
          />


<div className='d-flex justify-content-center  align-items-center mt-5 mb-3 '>
  <button className=' text-uppercase  border-0 py-2 rounded-5   px-5 bg-dark text-light' style={{fontSize:'12px'}}>
  Add account
    </button>
    
 
</div>
        </Modal.Body>
       

      </Modal>

      {/* Modal for Add Category */}
      <Modal show={showCategoryModal} onHide={handleCloseCategoryModal}>
      <Modal.Body style={{background:'#DCDCDC'}}>
        <div className='text-center' >

  <p className=' text-uppercase '> <b>Add Account </b></p>
</div>

<p className='mt-4'><b>code </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
      placeholder='PAYROLL'    />
 



<div className='d-flex justify-content-center  align-items-center mt-5 mb-3 ' style={{}}>
  <button className=' text-uppercase  border-0 py-2 rounded-5   px-5 bg-dark text-light' style={{marginTop:'200px' , fontSize:'12px'}}>
  Add account
    </button>
    
 
</div>
        </Modal.Body>
       
      </Modal>












      <Modal show={showAddCategoryModal} onHide={handleCloseAddCategoryModal}>
  



      <Modal.Body style={{background:'#DCDCDC'}}>
        <div className='text-center' >

  <p className=' text-uppercase '> <b>Add Category </b></p>
</div>

<p className='mt-4'><b>Category name </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
            placeholder='paypal'
          />
  
    
  <div className='d-flex justify-content-center  align-items-center mt-5 mb-3 ' style={{}}>
  <button className=' text-uppercase  border-0 py-2 rounded-5   px-5 bg-dark text-light' style={{marginTop:'200px' , fontSize:'12px'}}>
  Add Category
    </button>
    
 
</div>

        </Modal.Body>
</Modal>

<Modal show={showAddRuleModal} onHide={handleCloseAddRuleModal}>
<Modal.Body style={{background:'#DCDCDC'}}>
        <div className='text-center' >

  <p className=' text-uppercase '> <b>Add Rule </b></p>
</div>

<p className='mt-4'><b>Category </b></p>

<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
 
  <p className='mt-2'><b>Direction </b></p>

<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
  <p className='mt-2'><b>Wallet </b></p>

<select className='w-100 p-2 border-1  rounded-3 ' style={{background:'#DCDCDC'}}>
    <option value=""></option>
    <option >gitHub</option>
    <option >LinkedIn</option>
    <option >Grepper</option>
    <option >i don't want to do that </option>
  </select>
<div className='mt-3'>
<input type="checkbox" className='custom-checkbox'/> <b style={{fontSize:'14px'}} >apply to existing transactions</b>

</div>


<p className='mt-2' style={{fontSize:'8px'}}>Selecting “apply to existing transactions” will categorize past and future transactions and override existing rule.
</p>

<div className='d-flex justify-content-center  align-items-center mt-5 mb-3 ' style={{}}>
  <button className=' text-uppercase  border-0 py-2 rounded-5   px-5 bg-dark text-light' style={{marginTop:'50px' , fontSize:'12px'}}>
  Add Rule
    </button>
    
 
</div>
        </Modal.Body>
</Modal>










      <Modal show={showDetail} onHide={handleCloseDetail}>
       
       <Modal.Body style={{background:'#DCDCDC'}}>


       <p className='mt-4'><b>code </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
      placeholder='200'    />


<p className='mt-4'><b>Account Name </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
      placeholder='Sales'    />




<p className='mt-4'><b>Account Type </b></p>

<input
            type="text"
            className="w-100 p-2 border-1  rounded-3 "
            style={{ background: "#DCDCDC" }}
      placeholder='Income'    />




<p className='mt-4'><b>Description </b></p>

<textarea
            type="text"
            className="w-100 p-2 border-1  rounded-3  mb-3"
            style={{ background: "#DCDCDC" }}
          />

<div className="text-end  mb-3 ">
            <img src="/del.svg" alt="" />
          </div>




       </Modal.Body>
      

     </Modal>











   








    </>
  );
}

export default Categories;
