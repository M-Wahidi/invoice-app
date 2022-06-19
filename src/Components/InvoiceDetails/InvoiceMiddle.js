import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";

import {
  formatPaymentTerms,
  formatDefaultDate,
} from "../../Helper/formatPaymentTerms";
function InvoiceMiddle({ invoice }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  return (
    <div
      style={{
        color: `${theme ? "#333" : "#fff"}`,
        padding: "1rem",
        display: "grid",
        gridTemplateColumns: `${
          width < 450 ? "1fr auto" : width < 768 ? "1fr 1fr" : "1fr 1fr 1fr"
        }`,
        gap: "2rem",
        fontSize: `${width < 400 ? "12px" : width < 700 ? "14px" : "16px"}`,
      }}
    >
      <div>
        <div>
          <h5>Invoice Date</h5>
          <h3>
            {invoice?.invoiceDate !== undefined
              ? formatDefaultDate(invoice?.invoiceDate)
              : ""}
          </h3>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <h5>Payment Due</h5>
          <h3>
            {invoice?.invoiceDate !== undefined
              ? formatPaymentTerms(invoice?.invoiceDate, invoice?.payemntTerms)
              : ""}
          </h3>
        </div>
      </div>

      <div>
        <h5> Bill To</h5>
        <h3>{invoice?.addressTo?.clientName}</h3>
        <h5>{invoice?.addressTo?.streetAddress}</h5>
        <h5>{invoice?.addressTo?.city}</h5>
        <h5>{invoice?.addressTo?.postCode}</h5>
        <h5>{invoice?.addressTo?.country}</h5>
      </div>

      <div
        style={{
          gridColumnStart: 1,
          gridColumnEnd: -1,
        }}
      >
        <h5>Sent To</h5>
        <div
          style={{
            fontSize: `${width < 500 ? "14px" : "16px"}`,
          }}
        >
          {invoice?.addressTo?.clientEmail}
        </div>
      </div>
    </div>
  );
}

export default InvoiceMiddle;
