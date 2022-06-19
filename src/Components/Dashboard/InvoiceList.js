import React, { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../API/firebaseconfig";
import InvoiceItem from "./InvoiceItem";

function InvoiceList({ id, filterItem, setInvoiceLength }) {
  const [invoices, setInvoices] = useState([]);
  const getInvoices = () => {
    onSnapshot(doc(db, "Users", id), (doc) => {
      if (doc.data() === undefined) return;
      setInvoices(doc.data().invoiceList);
    });
  };

  const filterData = () => {
    const filterdArr = invoices.filter((elem) =>
      filterItem === ""
        ? elem
        : elem.invoiceStatus.toLowerCase() === filterItem.toLowerCase()
    );

    return filterdArr;
  };

  useEffect(() => {
    getInvoices();
    if (invoices) {
      setInvoiceLength(invoices.length);
    }
  }, [invoices]);

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
