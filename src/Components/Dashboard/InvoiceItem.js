import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import formatData from "../../Helper/formatData";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { motion } from "framer-motion";
import { ThemeFunc } from "../../Context/ThemeContext";

function InvoiceItem({ invoices }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  const {
    invoiceNo,
    invoiceDate: date,
    addressTo: { clientName },
    items,
    invoiceStatus,
  } = invoices;

  const getTotal = () => {
    return items.reduce((accum, curr) => {
      return accum + curr.total;
    }, 0);
  };

  return (
    <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 40 }}>
      <Link to={`/invoice/${invoiceNo}`}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            maxWidth: "100%",
            alignItems: "center",
            backgroundColor: `${theme ? "#fff" : "#1E2139"}`,
            color: `${theme ? " #333" : "#fff"}`,
            padding: `${width < 800 ? " 1rem" : "1.5rem 1rem"}`,
            fontSize: "1rem",
            gap: `${width < 800 ? 0 : "1rem"}`,
            position: "relative",
            marginTop: "1rem",
            borderRadius: "6px",
          }}
        >
          <div
            style={{
              minWidth: "90px",
              gridColumnStart: `${width < 800 ? 1 : ""}`,
              gridColumnEnd: `${width < 800 ? 2 : ""}`,
            }}
          >
            #{invoiceNo}
          </div>
          <div
            style={{
              width: "135px",
              fontSize: "16px",
              gridRowStart: `${width < 800 ? 2 : ""}`,
            }}
          >
            Due {formatData("date", date)}
          </div>
          <div
            style={{
              minWidth: "160px",
              gridColumnStart: `${width < 800 ? 8 : ""}`,
              textAlign: `${width < 800 ? "right" : "center"}`,
            }}
          >
            {clientName}
          </div>
          <div
            style={{
              minWidth: "90px",
              gridRowStart: `${width < 800 ? 3 : ""}`,
              fontSize: `${width < 800 ? "22px" : "16px"}`,
              position: "relative",
            }}
          >
            {formatData("number", getTotal())}
          </div>

          <div
            style={{
              backgroundColor: `${invoiceStatus === "Paid" ? "rgba(51, 214, 159, 0.05)" : invoiceStatus === "Pending" ? "rgba(255, 143, 0, 0.06)" : "rgba(223, 227, 250, 0.06)"}`,
              color: `${invoiceStatus === "Paid" ? "rgba(51, 214, 159)" : invoiceStatus === "Pending" ? "#FF8F00" : "#DFE3FA"}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "120px",
              height: "2.5rem",
              borderRadius: "6px",
              overflow: "hidden",
              gridRowStart: `${width < 800 ? 2 : ""}`,
              gridColumnStart: `${width < 800 ? 8 : ""}`,
              justifySelf: `${width < 800 ? "flex-end" : ""}`,
              position: "relative",
              top: `${width < 800 ? "1.3rem" : ""}`,
            }}
          >
            <div
              style={{
                fontSize: "40px",
                position: "relative",
                top: "5px",
                right: "10px",
                lineHeight: "50px",
              }}
            >
              <BsDot />
            </div>
            <div
              style={{
                position: "relative",
                text: "center",
                right: "18px",
              }}
            >
              {invoiceStatus}
            </div>
          </div>

          <span
            style={{
              color: "#7C5DFA",
              fontSize: "1.2rem",
              fontWeight: "bold",
              justifyContent: "center",
              right: "1rem",
              display: `${width < 800 ? "none" : "flex"}`,
            }}
          >
            <MdOutlineArrowForwardIos />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default InvoiceItem;
