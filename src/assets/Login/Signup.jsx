import { Row } from "react-bootstrap"


const Signup = () => {
  return (
    <>
    <Row className="mt-5 ps-5 pe-5 pb-5" >
    <p className=" with-dot mt-3"><b> First name</b></p>

    <input
            type="text"
           
            className="w-100 p-2 border-1 text-center rounded-3 "
            style={{ background: "#DCDCDC" }}
          />
              <p className=" with-dot mt-3"><b> Last  name</b></p>

<input
        type="text"
       
        className="w-100 p-2 border-1 text-center rounded-3 "
        style={{ background: "#DCDCDC" }}
      />
          <p className=" with-dot mt-3"><b> Company name</b></p>

<input
        type="text"
       
        className="w-100 p-2 border-1 text-center rounded-3 "
        style={{ background: "#DCDCDC" }}
      />


        </Row>
        <div className="text-center">
        <button
             
             className="bg-dark text-light px-5 py-2 rounded-5 mb-5 border-0"
           >
             continue
           </button>
           </div>
        </>
  )
}

export default Signup