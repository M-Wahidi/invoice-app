import React from "react";

function BillFrom() {
  return (
    <div className="bill-from-container" style={{ paddingTop: "3rem" }}>
      <h3 style={{ paddingBottom: "1rem" }}>Bill From</h3>

      <div className="street-address-from">
        <label htmlFor="street-address-from">Street Address</label>
        <input type="text" />
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div className="city-from" style={{ flex: 1, minWidth: "180px" }}>
          <label htmlFor="city-from">City</label>
          <input type="text" />
        </div>
        <div className="post__code-from" style={{ flex: 1, minWidth: "180px" }}>
          <label htmlFor="city-from">Post Code</label>
          <input type="text" />
        </div>
        <div className="country-from" style={{ flex: 1, minWidth: "180px" }}>
          <label htmlFor="city-from">Country</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default BillFrom;
