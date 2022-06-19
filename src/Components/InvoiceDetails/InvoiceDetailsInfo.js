import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";

function InvoiceDetailsInfo({ invoice }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: `${width < 768 ? "column" : " row"}`,
        justifyContent: "space-between",
        alignItems: `${width < 768 ? "flex-start" : "center"}`,
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "13px",
        color: `${theme ? "#333" : "#fff"}`,
      }}
    >
      <div style={{ paddingBottom: `${width < 768 ? "2rem" : ""}` }}>
        <p
          style={{
            marginBottom: "10px",
            fontSize: "1.4rem",
            color: `${theme ? "#333" : "#fff"}`,
          }}
        >
          #{invoice?.invoiceNo}
        </p>
        <p>{invoice?.discrpition}</p>
      </div>

      <div>
        <p>{invoice?.addressFrom?.streetAddress}</p>
        <p>{invoice?.addressFrom?.city}</p>
        <p>{invoice?.addressFrom?.postCode}</p>
        <p>{invoice?.addressFrom?.country}</p>
      </div>
    </div>
  );
}

export default InvoiceDetailsInfo;
