import InvoiceInfoContainer from "../Components/Dashboard/InvoiceInfoContainer";
import InvoiceList from "../Components/Dashboard/InvoiceList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import { AuthCTX } from "../Context/UserContext";
import { ThemeFunc } from "../Context/ThemeContext";

function Dashboard({ setOpenForm }) {
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const [filterItem, setFilterItem] = useState("");
  const [invoiceLength, setInvoiceLength] = useState(0);
  const { user } = AuthCTX();
  const { theme } = ThemeFunc();
  const [sortInvoice, setSortInvoice] = useState("descending");

  return (
    <div
      style={{
        position: "relative",
        left: `${width < 950 ? "0" : "50px"}`,
        display: "flex",
        flexDirection: `${width < 950 ? "column" : "row"}`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: "880px",
          margin: "0 auto",
          padding: "3rem 1rem",
        }}
      >
        <h3 style={{ overflow: "hidden", textAlign: "left", padding: "0 .5rem", width: "100%", color: `${theme ? "#333" : "#fff"}`, textTransform: "capitalize" }}>Hello {user?.name}</h3>

        <InvoiceInfoContainer sortInvoice={sortInvoice} setSortInvoice={setSortInvoice} setOpenForm={setOpenForm} setFilterItem={setFilterItem} invoiceLength={invoiceLength} />
        <InvoiceList sortInvoice={sortInvoice} id={id} filterItem={filterItem} setInvoiceLength={setInvoiceLength} />
      </div>
    </div>
  );
}

export default Dashboard;
