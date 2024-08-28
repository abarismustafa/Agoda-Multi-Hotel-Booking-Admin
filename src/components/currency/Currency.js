import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import AllCurrency from "./allCurrency/AllCurrency";
import SetCurrencyFormate from "./setCurrencyFormate/SetCurrencyFormate";
import SystemDefaultCurrency from "./systemDefaultCurrency/SystemDefaultCurrency";

function Currency() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="aiz-main-content">
        <div className="px-15px px-lg-25px">
          <div className="row">
            <div className="col-lg-6">
              <SystemDefaultCurrency />
            </div>
            <div className="col-lg-6">
              <SetCurrencyFormate />
            </div>
          </div>
          <div className="aiz-titlebar text-left mt-2 mb-3">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h1 className="h3">All Currencies</h1>
              </div>
              <div className="col-md-6 text-md-right">
                <button
                  onClick={handleShow}
                  className="btn btn-circle btn-primary"
                >
                  <span>Add New Currency</span>
                </button>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Add New Currency</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Name</label>
                    <div className="col-md-9">
                      <input type="text" name="name" className="form-control" placeholder="Name" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Symbol</label>
                    <div className="col-md-9">
                      <input type="text" name="symbol" className="form-control" placeholder="Symbol" required />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 col-form-label">Code</label>
                    <div className="col-md-9">
                      <input type="text" name="code" className="form-control" placeholder="Code" required />
                    </div>
                  </div>

                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Add Currency
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

          </div>
          <div className="row">
            <div className="col-lg-12">
              <AllCurrency />
            </div>
          </div>
        </div>
        {/* Footer */}
      </div>
    </>
  );
}
export default Currency;
