import { useState } from "react";

import Signup from "./Signup";

const ConfrimLogin = ({ email }) => {
  const [showWelcome, setShowWelcome] = useState(false);

  const handleContinueClick = () => {
    setShowWelcome(true);
  };

  return (
    <>
      {showWelcome ? (
        <Signup /> // Render the Welcome component when showWelcome is true
      ) : (
        <>
          <h2 style={{fontStyle:'italic' , fontWeight:'700' ,textTransform:'capitalize'}}>
            
              Swyftes
            
          </h2>
          <div className="text-center">
            <p className="mt-5">
              <b style={{textTransform:'initial'}}> Confirm your email by entering the code sent to: {email}</b>
            </p>

            <input
              type="text"
              placeholder="code"
              className="p-2 border rounded-3 text-center mt-5 "
              style={{ width: "70%" }}
            />

            <p className="mt-5" style={{textTransform:'initial'}}>
              I didn’t receive the code <u> Resend </u>
            </p>

            <button
              onClick={handleContinueClick} // Call handleContinueClick on button click
              className="bg-dark text-light px-5 py-2 rounded-5 mb-5  border-0"
            >
              continue
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default ConfrimLogin;
