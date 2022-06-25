import React, { useState, useEffect } from "react";
import { ThemeFunc } from "../../Context/ThemeContext";
import getTodayDate from "../../Helper/getTodayDate";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
function InvoiceInfo({
  setDiscrpition,
  setInvoiceDate,
  setPaymentTerms,
  discrpition,
  payemntTerms,
  title,
  openForm,
  getInvoiceBillFormData,
  invoiceDate,
  handleAddItem,
  handleChcekInput,
}) {
  const [oldBillFromInvoice, setOldBillFromInvoice] = useState({});
  const [error, setError] = useState(false);
  const { theme } = ThemeFunc();
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (openForm) {
      getInvoiceBillFormData(setOldBillFromInvoice);
    } else {
      setError(false);
    }
  }, [openForm]);

  useEffect(() => {
    if (handleAddItem) {
    }
  }, [handleAddItem]);

  useEffect(() => {
    if (title === "Edit Invoice" && openForm) {
      setDiscrpition(oldBillFromInvoice?.discrpition);
      setPaymentTerms(oldBillFromInvoice?.payemntTerms);
      setInvoiceDate(oldBillFromInvoice?.invoiceDate);
    }
  }, [oldBillFromInvoice]);

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
          <label
            style={{ color: `${theme ? "#333" : "#fff"}` }}
            htmlFor="invoice-d onate"
          >
            Invoice Date
          </label>
          <input
            type="date"
            style={{
              marginTop: "7px",
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${theme ? "1px solid rgb(223, 227, 250) " : ""}`,
              width: `${width < 645 ? "100vw" : ""}`,
              cursor: "pointer",
            }}
            onChange={(e) => setInvoiceDate(e.target.value)}
            value={invoiceDate || getTodayDate()}
          />
        </div>
        <div className="payment-terms" style={{ flex: 1, minWidth: "280px" }}>
          <label
            style={{ color: `${theme ? "#333" : "#fff"}` }}
            htmlFor="payment-terms"
          >
            Payment Terms
          </label>
          <select
            onChange={(e) => setPaymentTerms(e.target.value)}
            value={payemntTerms}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${theme ? "1px solid rgb(223, 227, 250) " : ""}`,
              cursor: "pointer",
            }}
          >
            <option value="Net 30 Days">Net 30 Days</option>
            <option value="Net 14 Days">Net 14 Days </option>
            <option value="Net 7 Days">Net 7 Days </option>
            <option value="Net 1 Days">Net 1 Day </option>
          </select>
        </div>
      </div>
      <div className="description-from" style={{ marginTop: "1rem" }}>
        <label
          style={{ color: `${theme ? "#333" : "#fff"}` }}
          htmlFor="from-description"
        >
          Description
        </label>
        <input
          type="text"
          required
          onChange={(e) => setDiscrpition(e.target.value)}
          value={discrpition}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
            border: `${
              discrpition === "" && handleChcekInput
                ? "1px solid rgb(236, 87, 87)"
                : theme
                ? "1px solid rgb(223, 227, 250) "
                : ""
            }`,
          }}
        />
      </div>
    </div>
  );
}

export default InvoiceInfo;
