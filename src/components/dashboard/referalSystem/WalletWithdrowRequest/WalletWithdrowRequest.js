import { useState } from "react";
import { Button, Modal } from "react-bootstrap"


function WalletWithdrowRequest() {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>
        <div className="aiz-user-panel overflow-hidden">
  <div className="row gutters-10">
    <div className="col-md-4 mx-auto mb-3">
      <div className="bg-grad-1 text-white rounded-lg overflow-hidden">
        <span className="size-30px rounded-circle mx-auto bg-soft-primary d-flex align-items-center justify-content-center mt-3">
          <i className="las la-dollar-sign la-2x text-white" />
        </span>
        <div className="px-3 pt-3 pb-3">
          <div className="h4 fw-700 text-center">0$</div>
          <div className="opacity-50 text-center">Wallet Balance</div>
        </div>
      </div>
    </div>
    <div className="col-md-4 mx-auto mb-3">
      <div className="p-3 rounded mb-3 c-pointer text-center bg-white shadow-sm hov-shadow-lg has-transition bg-soft-info" onClick={handleShow}>
        <span className="size-60px rounded-circle mx-auto bg-secondary d-flex align-items-center justify-content-center mb-3">
          <i className="las la-plus la-3x text-white" />
        </span>
        <div className="fs-18 text-primary">Wallet Withdraw Request</div>
        
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wallet Withdraw Request</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="https://demo.activeitzone.com/matrimonial/wallet/withdraw-request-store" method="POST">
  <input type="hidden" name="_token" defaultValue="jlYV3xRHJz8dqMz0JuuuUIpAbkfpcPN6heRJzSGj" />                  <div className="modal-body gry-bg px-3 pt-3">
    <div className="row">
      <div className="col-md-3">
        <label>Amount <span className="text-danger">*</span></label>
      </div>
      <div className="col-md-9">
        <input type="number" className="form-control mb-3" name="amount" min={1} max={0} placeholder="Amount" required />
      </div>
    </div>
    <div className="row">
      <div className="col-md-3">
        <label>Details <span className="text-danger">*</span></label>
      </div>
      <div className="col-md-9">
        <textarea className="resize-off form-control" rows={5} placeholder="Details" name="details" defaultValue={""} />
      </div>
    </div>
  </div>
</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
      <h5 className="mb-0 h6">Wallet Withdraw Request History</h5>
    </div>
    <div className="card-body">
      <table className="table aiz-table mb-0 footable footable-1 breakpoint-xl" style={{}}>
        <thead>
          <tr className="footable-header">
            <th style={{display: 'table-cell'}}>#</th><th style={{display: 'table-cell'}}>Amount</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Status</th><th data-breakpoints="lg" width="50%" style={{display: 'table-cell'}}>Details</th><th data-breakpoints="lg" style={{display: 'table-cell'}}>Date</th></tr>
        </thead>
        <tbody>
          <tr className="footable-empty"><td colSpan={5}>Nothing Found</td></tr></tbody>
      </table>
      <div className="aiz-pagination">
      </div>
    </div>
  </div>
</div>

        </>
    )
}
export default WalletWithdrowRequest