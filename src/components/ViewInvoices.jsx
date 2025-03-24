import React from 'react';

function ViewInvoices() {
    return (
        <>
            <div className="modal fade custom-modals" id="invoice_view">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">View Invoice</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>
                        <div className="modal-body pb-0">
                            <div className="prescribe-download">
                                <h5>21 Mar 2024</h5>
                                <ul>
                                    <li>
                                        <a href="javascript:void(0);" className="print-link">
                                            <i className="isax isax-printer5"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);" className="btn btn-primary prime-btn">Download</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="view-prescribe invoice-content">
                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="invoice-logo">
                                                <img 
                                                    src="https://doccure.dreamstechnologies.com/html/template/assets/img/logo.png" 
                                                    alt="logo" 
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="invoice-details">
                                                <strong>Invoice No:</strong> #INV005<br />
                                                <strong>Issued:</strong> 21 Mar 2024
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Billing Details */}
                                <div className="invoice-item">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="invoice-info">
                                                <h6 className="customer-text">Billing From</h6>
                                                <p className="invoice-details invoice-details-two">
                                                    Edalin Hendry <br />
                                                    806 Twin Willow Lane, <br />
                                                    New York, USA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-info">
                                                <h6 className="customer-text">Billing To</h6>
                                                <p className="invoice-details invoice-details-two">
                                                    Richard Wilson <br />
                                                    299 Star Trek Drive<br />
                                                    Florida, 32405, USA
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="invoice-info invoice-info2">
                                                <h6 className="customer-text">Payment Method</h6>
                                                <p className="invoice-details">
                                                    Debit Card <br />
                                                    XXXXXXXXXXXX-2541<br />
                                                    HDFC Bank
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Invoice Table */}
                                <div className="invoice-item invoice-table-wrap">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h6>Invoice Details</h6>
                                            <div className="table-responsive">
                                                <table className="invoice-table table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th>Description</th>
                                                            <th>Quantity</th>
                                                            <th>VAT</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>General Consultation</td>
                                                            <td>1</td>
                                                            <td>$0</td>
                                                            <td>$150</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Video Call</td>
                                                            <td>1</td>
                                                            <td>$0</td>
                                                            <td>$100</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4 ms-auto">
                                            <div className="table-responsive">
                                                <table className="invoice-table-two table">
                                                    <tbody>
                                                        <tr>
                                                            <th>Subtotal:</th>
                                                            <td><span>$350</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Discount:</th>
                                                            <td><span>-10%</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Total Amount:</th>
                                                            <td><span>$315</span></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Other Information */}
                                <div className="other-info mb-0">
                                    <h4>Other Information</h4>
                                    <p className="mb-0">
                                        An account of the present illness, which includes the circumstances 
                                        surrounding the onset of recent health changes and the chronology 
                                        of subsequent events that have led the patient to seek medicine.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewInvoices;
