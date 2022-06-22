import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../API/firebaseconfig";
import { ThemeFunc } from "../../Context/ThemeContext";
import Modal from "../Global/Modal";

function MobileActions({ invoice, setInvoice, setOpenForm, setLoading }) {
  const [openModal, setOpenModal] = useState(false);
  const { invoiceId } = useParams();
  const { theme } = ThemeFunc();
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    const targetDoc = doc(db, "Users", auth.currentUser.uid);
    const userInvoices = await getDoc(targetDoc);
    const { invoiceList } = userInvoices.data();
    const filteredInvoice = invoiceList.filter((elem) => elem.invoiceNo !== invoiceId);
    await setDoc(doc(db, "Users", auth.currentUser.uid), {
      invoiceList: filteredInvoice,
    });

    setTimeout(() => {
      setLoading(false);
      navigate(`/dashboard/${auth.currentUser.uid}`);
    }, 1000);
  };

  const handlePaidInvoiceStatus = async () => {
    if (invoice.invoiceStatus === "Paid") return;

    setLoading(true);
    const targetDoc = doc(db, "Users", auth.currentUser.uid);
    const userInvoices = await getDoc(targetDoc);
    const { invoiceList } = userInvoices.data();
    const filteredInvoice = invoiceList.map((elem) => {
      return elem.invoiceNo === invoiceId ? { ...elem, invoiceStatus: "Paid" } : elem;
    });
    await setDoc(
      doc(db, "Users", auth.currentUser.uid),
      {
        invoiceList: filteredInvoice,
      },
      { merge: true }
    );
    const targetInvoice = filteredInvoice.find((elem) => elem.invoiceNo === invoiceId);
    setLoading(false);
    setInvoice(targetInvoice);
  };

  return (
    <div
      className='invoice-action-header'
      style={{
        color: "#fff",
        width: "100%",
        height: "100px",
        borderRadius: "6px",
        gap: ".5rem",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: `${theme ? "#fff" : "#1E2139"}`,
        position: "absolute",
        bottom: "0",
        left: "0",
        paddingRight: "1rem",
      }}
    >
      {openModal && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            zIndex: 999999,
          }}
        >
          <Modal type='delete' openModal={openModal} setOpenModal={setOpenModal} handleDelete={handleDelete} />
        </div>
      )}
      <button
        onClick={() => setOpenForm(true)}
        className='edit-btn'
        style={{
          border: "none",
          borderRadius: "20px",
          padding: ".8rem 1.7rem",
          fontSize: "14px",
          color: "#fff",
          cursor: "pointer",
          background: "#333",
        }}
      >
        Edit
      </button>
      <button onClick={() => setOpenModal(true)} className='delete-btn' style={buttonStyle}>
        Delete
      </button>
      <button onClick={handlePaidInvoiceStatus} className='invoiceStatus-btn' style={buttonStyle}>
        Mark As Paid
      </button>
    </div>
  );
}

const buttonStyle = {
  border: "none",
  borderRadius: "20px",
  padding: ".8rem 1rem",
  fontSize: "14px",
  color: "#fff",
  cursor: "pointer",
};
const EditButtonStyle = {
  backgroundColor: "#333",
};
export default MobileActions;
