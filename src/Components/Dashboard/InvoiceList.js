import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../API/firebaseconfig";
import sortInvoices from "../../Helper/sortInvoices";
import InvoiceItem from "./InvoiceItem";

function InvoiceList({ id, filterItem, setInvoiceLength, sortInvoice }) {
  const [invoices, setInvoices] = useState([]);
  const filterData = () => {
    const filterdArr = invoices.filter((elem) =>
      filterItem === ""
        ? elem
        : elem.invoiceStatus.toLowerCase() === filterItem.toLowerCase()
    );
    return filterdArr;
  };

  useEffect(() => {
    onSnapshot(doc(db, "Users", id), (doc) => {
      if (doc.data() === undefined) return;
      setInvoices(doc.data().invoiceList);
    });
  }, []);

  useEffect(() => {
    setInvoiceLength(invoices.length);
  }, [invoices]);

  sortInvoices(invoices, sortInvoice);

  return (
    <div
      style={{
        width: "98%",
        marginTop: "3rem",
      }}
    >
      {invoices &&
        filterData().map((invoices, key) => (
          <InvoiceItem invoices={invoices} key={key} />
        ))}
    </div>
  );
}

export default InvoiceList;
