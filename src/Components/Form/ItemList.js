import React from "react";
import Item from "./Item";
function ItemList({ items, setItems }) {
  const handleDelete = (id) => {
    const filteredItems = items.filter((elem) => elem.id !== id);
    setItems(filteredItems);
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
      <h2 style={{ color: "white", opacity: "0.5" }}>Item List</h2>
      <Item />

      {items.map((elem, key) => {
        return <Item key={elem.id} handleDelete={handleDelete} id={elem.id} />;
      })}

      <button
        onClick={() =>
          setItems((prev) => [
            ...prev,
            { id: Math.floor(Math.random() * 100000) },
          ])
        }
        style={{
          color: "#fff",
          backgroundColor: "#1f213a",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          fontSize: "1rem",
          padding: ".5rem",
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

export default ItemList;
