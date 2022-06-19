import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { useParams, useNavigate } from "react-router-dom";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../API/firebaseconfig";
import { ThemeFunc } from "../../Context/ThemeContext";

function InvoiceAction({ invoice, setInvoice, setOpenForm }) {
  const { width } = useWindowDimensions();
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
        marginTop: "2rem",
        color: `${theme ? "#333" : "#fff"}`,
        backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
        width: "100%",
        height: "100px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.3rem",
        boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          justifyContent: `${width < 700 ? "space-between" : ""}`,
          width: `${width < 700 ? "100%" : "auto"}`,
        }}
      >
        <span>Status: </span>
        <span
          style={{
            backgroundColor: `${
              invoice?.invoiceStatus === "Paid"
                ? "rgba(51, 214, 159, 0.05)"
                : invoice?.invoiceStatus === "Pending"
                ? "rgba(255, 143, 0, 0.06)"
                : "rgba(223, 227, 250, 0.06)"
            }`,
            color: `${
              invoice?.invoiceStatus === "Paid"
                ? "rgba(51, 214, 159)"
                : invoice?.invoiceStatus === "Pending"
                ? "#FF8F00"
                : "#DFE3FA"
            }`,
            padding: ".3rem 1rem",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {invoice?.invoiceStatus}
        </span>
      </div>

      <div style={{ display: `${width < 700 ? "none" : "flex"}`, gap: "1rem" }}>
        <button onClick={() => setOpenForm(true)} style={buttonStyle}>
          Edit
        </button>
        <button onClick={handleDelete} style={buttonStyle}>
          Delete
        </button>
        <button onClick={handlePaidInvoiceStatus} style={buttonStyle}>
          Mark As Paid
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  border: "none",
  borderRadius: "20px",
  padding: ".8rem 1.5rem",
  fontSize: "1rem",
  color: "#fff",
  cursor: "pointer",
};

export default InvoiceAction;