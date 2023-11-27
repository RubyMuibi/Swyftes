import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes ,Route } from "react-router-dom";

import Team from './assets/Team';
// import CashFlow from './assets/Cashflow';
import Treasury from './assets/Treasury';
// import Invest from './assets/Invest';
import Setting from './assets/Treasury/Setting';
import Fiat from './assets/Fiat/Fiat';
import Overview from './assets/Overview';
import Users from './assets/Users';
import Login from './assets/Login/Login';
import Share from './assets/Share/Share';

// import Login from './Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <Login/>} />
      <Route path='/Treasury' element={ <Treasury/>} />
      <Route path='/Team' element={ <Team/>} />
      <Route path='/Setting' element={ <Setting/>} />
      <Route path='/Fiat' element={ <Fiat/>} />
      <Route path='/Overview' element={ <Overview/>} />
      <Route path='/Users' element={ <Users/>} />
      <Route path='/Share' element={ <Share/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;