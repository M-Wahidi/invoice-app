import React, { useState, useEffect } from "react";
import clearForm from "../../Helper/clearForm";
import { ThemeFunc } from "../../Context/ThemeContext";

function BillFrom({
  handleAddItem,
  addFromAddress,
  openForm,
  title,
  getInvoiceBillFormData,
  handleChcekInput,
}) {
  const [oldBillFromInvoice, setOldBillFromInvoice] = useState({});
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const { theme } = ThemeFunc();

  const addressFrom = {
    streetAddress,
    city,
    postCode,
    country,
  };
  const addressFun = [setStreetAddress, setCity, setPostCode, setCountry];

  useEffect(() => {
    if (handleAddItem) {
      addFromAddress({ ...addressFrom });
    }
  }, [handleAddItem]);

  useEffect(() => {
    if (openForm && title === "Edit Invoice") {
      getInvoiceBillFormData(setOldBillFromInvoice);
    }
    if (!openForm) {
      clearForm(addressFun);
    }
  }, [openForm]);

  useEffect(() => {
    if (title === "Edit Invoice" && openForm) {
      setStreetAddress(oldBillFromInvoice?.addressFrom?.streetAddress);
      setCity(oldBillFromInvoice?.addressFrom?.city);
      setPostCode(oldBillFromInvoice?.addressFrom?.postCode);
      setCountry(oldBillFromInvoice?.addressFrom?.country);
    }
  }, [oldBillFromInvoice]);

  return (
    <div className="bill-from-container" style={{ paddingTop: "3rem" }}>
      <h3 style={{ paddingBottom: "1rem" }}>Bill From</h3>

      <div className="street-address-from">
        <label
          style={{ color: `${theme ? "#333" : "#fff"}` }}
          htmlFor="street-address-from"
        >
          Street Address
        </label>
        <input
          type="text"
          required
          onChange={(e) => setStreetAddress(e.target.value)}
          value={streetAddress}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
            border: `${
              streetAddress === "" && handleChcekInput
                ? "1px solid rgb(236, 87, 87)"
                : theme
                ? "1px solid rgb(223, 227, 250) "
                : ""
            }`,
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div className="city-from" style={{ flex: 1, minWidth: "180px" }}>
          <label
            style={{ color: `${theme ? "#333" : "#fff"}` }}
            htmlFor="city-from"
          >
            City
          </label>
          <input
            type="text"
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${
                city === "" && handleChcekInput
                  ? "1px solid rgb(236, 87, 87)"
                  : theme
                  ? "1px solid rgb(223, 227, 250) "
                  : ""
              }`,
            }}
          />
        </div>
        <div className="post__code-from" style={{ flex: 1, minWidth: "180px" }}>
          <label
            style={{ color: `${theme ? "#333" : "#fff"}` }}
            htmlFor="city-from"
          >
            Post Code
          </label>
          <input
            type="text"
            required
            onChange={(e) => setPostCode(e.target.value)}
            value={postCode}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${
                postCode === "" && handleChcekInput
                  ? "1px solid rgb(236, 87, 87)"
                  : theme
                  ? "1px solid rgb(223, 227, 250) "
                  : ""
              }`,
            }}
          />
        </div>
        <div className="country-from" style={{ flex: 1, minWidth: "180px" }}>
          <label
            style={{ color: `${theme ? "#333" : "#fff"}` }}
            htmlFor="city-from"
          >
            Country
          </label>
          <input
            type="text"
            required
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${
                country === "" && handleChcekInput
                  ? "1px solid rgb(236, 87, 87)"
                  : theme
                  ? "1px solid rgb(223, 227, 250) "
                  : ""
              }`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(BillFrom);
