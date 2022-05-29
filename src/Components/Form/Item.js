import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

function Item({ handleDelete, id = "" }) {
  const [itemName, setItemName] = useState("");
  const [itemQTY, setItemQty] = useState("");
  const [itemPrice, setPrice] = useState("");

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
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          type="text"
          style={{ marginTop: "5px", minWidth: "300px" }}
        />
      </div>

      <div className="item-qty-from" style={{ maxWidth: "70px" }}>
        <label htmlFor="item-qty-from"> Qty.</label>
        <input
          value={itemQTY}
          onChange={(e) => setItemQty(e.target.value)}
          type="number"
          min={0}
          style={{ marginTop: "5px" }}
        />
      </div>

      <div className="item-price-from" style={{ maxWidth: "90px" }}>
        <label htmlFor="item-price-from">Price</label>
        <input
          value={itemPrice}
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
          marginBottom: "40px",
          marginLeft: "10px",
        }}
      >
        <label htmlFor="item-total-from">Total</label>
        <div style={{ marginTop: "12px" }}></div>
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

export default Item;
