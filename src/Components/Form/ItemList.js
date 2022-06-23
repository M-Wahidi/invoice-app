import React, { useState, useEffect } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db, auth } from "../../API/firebaseconfig";
import { ThemeFunc } from "../../Context/ThemeContext";

function ItemList({ addItem, handleAddItem, title, openForm }) {
  const [itemsList, setItemsList] = useState([]);
  const [oldBillFromInvoice, setOldBillFromInvoice] = useState([]);
  const invoicePath = useLocation();
  const { theme } = ThemeFunc();

  const handleDelete = (id) => {
    if (title === "Edit Invoice") {
      const filteredItems = oldBillFromInvoice.filter((elem) => elem.id !== id);
      setOldBillFromInvoice(filteredItems);
      return;
    }
    const filteredItems = itemsList.filter((elem) => elem.id !== id);
    setItemsList(filteredItems);
  };

  const getInvoiceBillFromData = async () => {
    if (!invoicePath.pathname.includes("/dashboard")) {
      const invoiceID = invoicePath.pathname.split("/")[2];
      const targetInvoice = doc(db, "Users", auth.currentUser.uid);
      const invoice = await getDoc(targetInvoice, (doc) => doc);
      const { invoiceList } = invoice.data();
      const currentInvoice = invoiceList.find((elem) => elem.invoiceNo === invoiceID);
      const { items } = currentInvoice;
      setOldBillFromInvoice(items);
      setItemsList(items);
    }
  };

  useEffect(() => {
    if (openForm && title === "Edit Invoice") {
      getInvoiceBillFromData();
    }
    if (!openForm) {
      setItemsList([]);
    }
  }, [openForm]);

  const handlecreateItem = () => {
    if (title === "Edit Invoice") {
      const id = uuidv4();
      setOldBillFromInvoice((prev) => [...prev, { id: id }]);
      return;
    }
    setItemsList((prev) => [...prev, { id: uuidv4() }]);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <h2 style={{ color: `${theme ? "#333" : "#fff"}`, opacity: "0.5" }}>Item List</h2>

      {title !== "Edit Invoice" &&
        itemsList.map((elem) => {
          return <Item key={elem.id} handleDelete={handleDelete} handleAddItem={handleAddItem} id={elem.id} addItem={addItem} setItemsList={setItemsList} />;
        })}

      {title === "Edit Invoice" &&
        oldBillFromInvoice.map((item) => {
          return (
            <Item
              key={item.id}
              handleDelete={handleDelete}
              handleAddItem={handleAddItem}
              id={item.id}
              addItem={addItem}
              setItemsList={setItemsList}
              item={item}
              title={title}
              openForm={openForm}
              setOldBillFromInvoice={setOldBillFromInvoice}
            />
          );
        })}

      <button
        onClick={handlecreateItem}
        style={{
          color: `${theme ? "rgb(126, 136, 195)" : "#fff"}`,
          backgroundColor: `${theme ? "rgb(249, 250, 250)" : "#1f213a"}`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontSize: "1rem",
          padding: ".8rem .5rem",
          marginBottom: "1rem",
          borderRadius: "20px",
          border: "none",
          opacity: "0.9",
        }}
      >
        + Add New Item
      </button>
    </div>
  );
}

export default React.memo(ItemList);
