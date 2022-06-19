import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../API/firebaseconfig";
import { ThemeFunc } from "../../Context/ThemeContext";

function MobileActions({ setInvoice, setOpenForm }) {
  const { invoiceId } = useParams();
  const navigate = useNavigate();
  const { theme } = ThemeFunc();
  const handleDelete = async () => {
    const targetDoc = doc(db, "Users", auth.currentUser.uid);
    const userInvoices = await getDoc(targetDoc);
    const { invoiceList } = userInvoices.data();
    const filteredInvoice = invoiceList.filter(
      (elem) => elem.invoiceNo !== invoiceId
    );
    await setDoc(doc(db, "Users", auth.currentUser.uid), {
      invoiceList: filteredInvoice,
    });
    navigate(`/dashboard/${auth.currentUser.uid}`);
  };

  const handlePaidInvoiceStatus = async () => {
    const targetDoc = doc(db, "Users", auth.currentUser.uid);
    const userInvoices = await getDoc(targetDoc);
    const { invoiceList } = userInvoices.data();
    const filteredInvoice = invoiceList.map((elem) => {
      return elem.invoiceNo === invoiceId
        ? { ...elem, invoiceStatus: "Paid" }
        : elem;
    });
    await setDoc(
      doc(db, "Users", auth.currentUser.uid),
      {
        invoiceList: filteredInvoice,
      },
      { merge: true }
    );
    const targetInvoice = filteredInvoice.find(
      (elem) => elem.invoiceNo === invoiceId
    );
    setInvoice(targetInvoice);
  };

  return (
    <div
      className="invoice-action-header"
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
      <button
        onClick={() => setOpenForm(true)}
        style={{
          border: "none",
          borderRadius: "20px",
          padding: ".8rem 1.7rem",
          fontSize: "14px",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Edit
      </button>
      <button onClick={handleDelete} style={buttonStyle}>
        Delete
      </button>
      <button onClick={handlePaidInvoiceStatus} style={buttonStyle}>
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

export default MobileActions;
