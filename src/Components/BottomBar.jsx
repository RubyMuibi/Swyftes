import "./bottombar.css";
import { Link } from "react-router-dom";
const BottomBar = () => {
  return (
    <>
      <div className=" bottom-bar d-flex justify-content-center  align-items-center">
        <Link to="/">
          <div className="text-center ps-5">
            <img src="/arcticons_activity-manager.svg" alt="" />
            <p className="pt-0">TREASURY</p>
          </div>
        </Link>

        <Link to="/CashFlow">
          <div className="text-center ps-5">
            <img src="/chart.svg" alt="" />
            <p className="pt-0">Cash flow</p>
          </div>
        </Link>
        <Link to="/Invest">
        <div className="text-center ps-5">
          <img src="/tdesign_chart-line.svg" alt="" />
          <p className="pt-0">Invest</p>
        </div>
        </Link>
      </div>
    </>
  );
};

export default BottomBar;
