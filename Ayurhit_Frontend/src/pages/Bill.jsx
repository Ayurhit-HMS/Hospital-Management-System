import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getBills } from "../services/patientService";
import { toast } from "react-toastify";
import logo from "../images/logo.png";
import html2canvas from 'html2canvas';

function Bill() {

    const [bills, setBills] = useState([]);
    const [selectedBill, setSelectedBill] = useState(null);
    const [isSidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getBills();
                if (response && response.status === 200) {
                    console.log(response.data)
                    const sortedBills = response.data.sort((a, b) => new Date(b.billing_date) - new Date(a.billing_date));
                    setBills(sortedBills);
                    if (sortedBills.length > 0) {
                        setSelectedBill(sortedBills[0]);
                    }
                } else {
                    toast.error("no response")
                }
            } catch (ex) {
                toast.error('Something went wrong while fetching bills.');
            }
        };
        fetchData();
    }, []);

    const calculateTotalAmount = (bill) => {
        let total = 0;
        if (bill) {
            total += bill.consultationFees;
            total += bill.medicationFees;
            total += bill.procedureFees;
            total += bill.otherCharges;
            if (bill.gstAmount) total += bill.gstAmount;
            if (bill.discount) total -= bill.discount;
        }
        return total.toFixed(2);
    };

    const handleViewBill = (bill) => {
        setSelectedBill(bill);
        const myModal = new window.bootstrap.Modal(document.getElementById('billModal'));
        myModal.show();
    };

    const handlePayBill = (bill) => {
        toast.success(`Bill ${bill.transaction_id} paid successfully.`);
    };

    const downloadIamge = () => {
        if (selectedBill) {
            const element = document.getElementById('prescriptionContent');

            html2canvas(element).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const link = document.createElement('a');
                link.href = imgData;
                link.download = `prescription_${selectedBill.id}.png`;
                link.click();
            });
        }
    };

    return (
        <div className="container-fluid patient-dashboard-content">
            <div className="row">
                <div className={isSidebarVisible ? "col-md-2" : "col-md-0"}>
                    <div className="custom-sidebar">
                        <PatientSidebar isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}></PatientSidebar>
                    </div>
                </div>
                <div className="col">
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <div className="container">
                            <h1 className="text-center mb-3">Bills</h1>
                            {selectedBill && (
                                <div className="mt-5 mb-5">
                                    <div className="container mt-3 mb-5" id="billContent">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-8 border border-dark">
                                                <div className="row d-flex justify-content-between" style={{ backgroundColor: "#0A98D8" }}>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-flex">
                                                            <img src={logo} className="img-fluid mb-3" alt="Hospital Logo" style={{ height: 100 }} />
                                                            <div>
                                                                <p className="h1 title mb-1">Ayurhit</p>
                                                                <p className="h4 text-center">H o s p i t a l s</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 text-light mt-3">
                                                        <div className="d-grid text-end">
                                                            <p className="h4 m-0">Transaction ID: {selectedBill.transactionId}</p>
                                                            <p className="m-0">Date: {new Date(selectedBill.billingDate).toISOString().split('T')[0]}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 d-flex justify-content-between">
                                                    <p className="h6">Patient Name: {selectedBill.patient.firstName} {selectedBill.patient.lastName}</p>
                                                    <p className="h6">Total Amount: ₹ {calculateTotalAmount(selectedBill)}</p>
                                                </div>
                                                <hr />

                                                <table className="table mt-5 mb-5">
                                                    <thead>
                                                        <tr>
                                                            <th>Charges Type</th>
                                                            <th>Amount (₹)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {console.log(typeof selectedBill.gstAmount)}
                                                        <tr><td>Consultation Fee</td><td>{selectedBill.doctor.consultationFees}</td></tr>
                                                        {selectedBill.medicationFees && selectedBill.medicationFees!=0 && <tr><td>Medication Fees</td><td>{selectedBill.medicationFees}</td></tr>}
                                                        {selectedBill.procedureFees && <tr><td>Procedure Fees</td><td>{selectedBill.procedureFees}</td></tr>}
                                                        {selectedBill.otherCharges && <tr><td>Room Charges</td><td>{selectedBill.otherCharges}</td></tr>}
                                                        {selectedBill.gstAmount && selectedBill.gstAmount !==0 && <tr><td>GST Amount</td><td>{selectedBill.gstAmount}</td></tr>}
                                                        {selectedBill.discount && selectedBill.discount!=0 && <tr><td>Discount</td><td>- {selectedBill.discount}</td></tr>}
                                                        {selectedBill.totalAmount && selectedBill.totalAmount!=0 &&<tr><td>Total Amount</td><td>- {calculateTotalAmount(selectedBill)}</td></tr>}
                                                        {selectedBill.dueDate && <tr><td>Due Date</td><td>{selectedBill.dueDate}</td></tr>}
                                                        {selectedBill.paymentMethod && <tr><td>Payment Method</td><td>- {selectedBill.paymentMethod}</td></tr>}
                                                        {selectedBill.status && <tr><td>Bill Status</td><td>- {selectedBill.status}</td></tr>}
                                                    </tbody>
                                                </table>
                                                <div className="row">
                                                    <div style={{ backgroundColor: "#0A98D8" }}>
                                                        <div className="row text-light d-flex justify-content-between">
                                                            <div className="col-md-4 text-center mt-3">
                                                                <p className="h4">Ayurhit Hospitals</p>
                                                                <p className="h6">Pioneering Medical Excellence <br /> Delivering Trusted Care</p>
                                                            </div>
                                                            <div className="col-md-5 mt-3">
                                                                <p className="ms-5">Call : 02112 1234 1234 <br /> Email : ayurhit.hospital@gmail.com <br /> Address : Ayurhit Hospital, Phase-2, Hinjewadi Pune</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-success mb-5 ps-4 pe-4" onClick={() => handlePayBill(selectedBill)}>Pay Bill</button>
                                        <button className="btn btn-success mb-5 ms-5 ps-3 pe-3" onClick={() => downloadIamge()}>Download Bill</button>
                                    </div>
                                </div>
                            )}

                            {bills.length > 0 ? (
                                <table className="table table-lg text-center">
                                    <thead>
                                        <tr>
                                            <th>Billing Date</th>
                                            <th>Total Amount (₹)</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {bills.map((bill) => (
                                            <tr key={bill.id}>
                                                <td>{bill.billing_date}</td>
                                                <td>₹ {calculateTotalAmount(bill)}</td>
                                                <td><button className="btn btn-warning" onClick={() => handleViewBill(bill)}>View Bill</button></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div>You don't have any bills.</div>
                            )}
                        </div>
                    </div>
                    <div className={isSidebarVisible ? "ms-5" : "ms-0"}>
                        <Footer />
                    </div>
                </div>
            </div>

            <div className="modal fade" id="billModal" tabIndex="-1" aria-labelledby="billModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="billModalLabel">Bill Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {selectedBill && (
                                <div className="mt-5 mb-5">

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
