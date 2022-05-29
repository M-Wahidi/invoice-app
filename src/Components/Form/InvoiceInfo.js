import React from "react";

function InvoiceInfo() {
  return (
    <div className="invoice-info-container" style={{ padding: "0 1rem" }}>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div
          className="invoice-date"
          style={{
            flex: 1,
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <label htmlFor="invoice-date">Invoice Date</label>
          <input type="date" style={{ marginTop: "7px" }} />
        </div>
        <div className="payment-terms" style={{ flex: 1, minWidth: "280px" }}>
          <label htmlFor="payment-terms">Payment Terms </label>
          <select>
            <option value="Net 1 Days">Net 30 Days </option>
            <option value="Net 7 Days">Net 7 Days </option>
            <option value="Net 14 Days">Net 14 Days </option>
            <option value="Net 30 Days">Net 30 Days </option>
          </select>
        </div>
      </div>
      <div className="description-from" style={{ marginTop: "1rem" }}>
        <label htmlFor="from-description">Description</label>
        <input type="text" />
      </div>
    </div>
  );
}

export default InvoiceInfo;
