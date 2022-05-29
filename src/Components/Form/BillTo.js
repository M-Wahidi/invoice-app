function BillTo() {
  return (
    <div className="bill-to-container" style={{ flexWrap: "wrap" }}>
      <h3 style={{ paddingBottom: "1rem" }}>Bill To</h3>

      <div className="client-name">
        <label htmlFor="client-name">Clinet Name</label>
        <input type="text" />
      </div>

      <div className="client-email">
        <label htmlFor="client-email">Clinet Email</label>
        <input type="text" />
      </div>

      <div className="street-address-to">
        <label htmlFor="street-address-to">Street Address</label>
        <input type="text" />
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div className="city-to" style={{ flex: 1, minWidth: "100%" }}>
          <label htmlFor="city-to">City</label>
          <input type="text" />
        </div>
        <div className="post__code-to" style={{ flex: 1, minWidth: "100%" }}>
          <label htmlFor="city-to">Post Code</label>
          <input type="text" />
        </div>
        <div className="country-to" style={{ flex: 1, minWidth: "100%" }}>
          <label htmlFor="city-to">Country</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default BillTo;
