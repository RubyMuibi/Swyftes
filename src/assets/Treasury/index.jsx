import { useState } from "react";

import { Accordion, Col, Container, Row } from "react-bootstrap";

import Navbars from "../../Compunents/Navbar";
import Sidebar from "../../Compunents/Sidebar";
import TabBar from "./Tabbar";
import Assets from "./Assets";
import Accounts from "./Accounts";
import CashFlow from "./CashFlow";
import Treasurry from './Treasury'
import MobileSidebar from "../../Compunents/MobileSidebar";
import Categories from "./Categories";

// import BottomBar from "../../Compunents/BottomBar";

const Treasury = () => {
  const [activeTab, setActiveTab] = useState("Assets");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Navbars />
        </Row>
        <Row>
          <Col md={2}>
            <Sidebar 
            active='Swyftes' />
            <MobileSidebar/>
          </Col>
          <Col
            md={10}
            style={{
              height: "90vh ",
              overflowY: "auto",
              paddingBottom: "80px",
            }}
          >
            <TabBar  activeTab={activeTab} onTabClick={handleTabClick} />

            <div className='mobileblock'>
              {activeTab === "Assets" && <Assets/>}
              {activeTab === "Accounts" && <Accounts/>}
              {activeTab === "Cash" && <CashFlow/>}
              {activeTab === "category" && <Categories/>}
              {/* {activeTab === "Treasury" && <Treasurry/>} */}

            </div>
            {/* <BottomBar /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Treasury;
