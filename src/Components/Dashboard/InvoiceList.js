import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../API/firebaseconfig";
import InvoiceItem from "./InvoiceItem";
function InvoiceList({ id }) {
  const userRef = doc(db, "Users", id);
  const [users, setUsers] = useState([]);

  const getInvoices = async () => {
    const invoices = await getDoc(userRef);
    setUsers(invoices.data().Invoices);
  };

  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <div
      style={{
        width: "98%",
        marginTop: "3rem",
      }}
    >
      {users &&
        users.map((invoices, key) => (
          <InvoiceItem invoices={invoices} key={key} />
        ))}
    </div>
  );
}

export default InvoiceList;
