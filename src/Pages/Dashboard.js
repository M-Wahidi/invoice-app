import InvoiceInfoContainer from "../Components/Dashboard/InvoiceInfoContainer";
import InvoiceList from "../Components/Dashboard/InvoiceList";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";

function Dashboard({ setOpenForm }) {
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const [filterItem, setFilterItem] = useState("");
  const [invoiceLength, setInvoiceLength] = useState(0);

  return (
    <div
      style={{
        position: "relative",
        left: `${width < 950 ? "0" : "50px"}`,
        display: "flex",
        flexDirection: `${width < 950 ? "column" : "row"}`,
        height: "100%",
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
        <InvoiceInfoContainer
          setOpenForm={setOpenForm}
          setFilterItem={setFilterItem}
          invoiceLength={invoiceLength}
        />
        <InvoiceList
          id={id}
          filterItem={filterItem}
          setInvoiceLength={setInvoiceLength}
        />
      </div>
    </div>
  );
}

export default Dashboard;
