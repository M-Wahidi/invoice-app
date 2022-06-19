import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";

function Item({
  handleDelete,
  id = "",
  addItem,
  handleAddItem,
  setItemsList,
  item,
  title,
  setOldBillFromInvoice,
}) {
  const [itemName, setItemName] = useState("");
  const [itemQTY, setItemQty] = useState("");
  const [itemPrice, setPrice] = useState("");
  const [total, setTotal] = useState("");

  const handleUpdateTotal = () => {
    setTotal(itemPrice * itemQTY);
  };

  useEffect(() => {
    handleUpdateTotal();
  }, [itemPrice, itemQTY]);

  useEffect(() => {
    if (handleAddItem) {
      addItem(id, itemName, itemQTY, itemPrice, total);
      setItemsList([]);
      if (title === "Edit Invoice") setOldBillFromInvoice([]);
    }
  }, [handleAddItem]);

  useEffect(() => {
    if (title === "Edit Invoice") {
      setItemQty(item.qty);
      setItemName(item.name);
      setPrice(item.price);
      setTotal(item.total);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        alignItems: "center",
      }}
    >
      <div
        className="item-name-from"
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "100%",
        }}
      >
        <label htmlFor="tem-name-from">Item Name</label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.name : ""}
          onChange={(e) => setItemName(e.target.value)}
          type="text"
          style={{ marginTop: "5px", minWidth: "300px" }}
        />
      </div>

      <div className="item-qty-from" style={{ maxWidth: "70px" }}>
        <label htmlFor="item-qty-from"> Qty.</label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.qty : ""}
          onChange={(e) => setItemQty(e.target.value)}
          type="number"
          min={0}
          style={{ marginTop: "5px" }}
        />
      </div>

      <div className="item-price-from" style={{ maxWidth: "90px" }}>
        <label htmlFor="item-price-from">Price</label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.price : ""}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min={0}
          style={{ marginTop: "5px" }}
        />
      </div>
      <div
        className="item-total-from"
        style={{
          width: "150px",
          height: "100%",
          marginLeft: "10px",
          marginTop: "-13px",
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <label htmlFor="item-total-from">Total</label>
        <div
          style={{
            marginTop: "12px",
            color: "#fff",
            height: "100%",
            position: "relative",
            top: "5px",
          }}
        >
          {total || ""}
        </div>
      </div>
      <div
        onClick={() => id && handleDelete(id)}
        style={{
          cursor: "pointer",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          fontSize: "1.4rem",
          paddingTop: "25px",
        }}
      >
        <AiFillDelete />
      </div>
    </div>
  );
}

export default React.memo(Item);
