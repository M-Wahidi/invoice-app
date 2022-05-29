import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function InvoiceItem({ invoices }) {
  const {
    InvoiceNo,
    Date: date,
    Client: { ClientName },
    Amount,
    Status,
  } = invoices;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dt = new Date(date.seconds * 1000);
  const formatDate = ` ${dt.getDate()} ${
    monthNames[dt.getMonth()]
  } ${dt.getFullYear()}`;

  return (
    <Link to={`/invoice/ ${InvoiceNo}`}>
      <div
        style={{
          display: "flex",
          maxWidth: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          background: "#1f213a",
          padding: "1.5rem",
          color: "#fff",
          fontSize: "1rem",
          gap: "2rem",
          position: "relative",
          borderRadius: "6px",
        }}
      >
        <div>#{InvoiceNo}</div>
        <div>Due {formatDate}</div>
        <div>{ClientName}</div>
        <div>${Amount}</div>
        <div
          style={{
            backgroundColor: `${
              Status === "Paid"
                ? "rgba(51, 214, 159, 0.05)"
                : Status === "Pending"
                ? "rgba(255, 143, 0, 0.06)"
                : "rgba(223, 227, 250, 0.06)"
            }`,
            color: `${
              Status === "Paid"
                ? "rgba(51, 214, 159)"
                : Status === "Pending"
                ? "#FF8F00"
                : "#DFE3FA"
            }`,
            padding: ".6rem 2.5rem",
            borderRadius: "6px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-70%)",
              left: "18%",
              fontSize: "4rem",
            }}
          >
            .
          </span>
          <div>{Status}</div>
        </div>
        <span
          style={{
            color: "#7C5DFA",
            fontSize: "1.2rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <MdOutlineArrowForwardIos />
        </span>
      </div>
    </Link>
  );
}

export default InvoiceItem;
