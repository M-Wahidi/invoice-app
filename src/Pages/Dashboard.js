import SideBar from "../Components/Global/SideBar";
import Form from "../Components/Form/Form";
import InvoiceInfoContainer from "../Components/Dashboard/InvoiceInfoContainer";
import "../Components/Dashboard/Dashboard.css";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import InvoiceList from "../Components/Dashboard/InvoiceList";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Dashboard() {
  const { width } = useWindowDimensions();
  const [openForm, setOpenForm] = useState(false);
  const { id } = useParams();

  return (
    <div
      className="dashboard-container"
      style={{
        display: `${width < 768 ? "block" : "flex"}`,
      }}
    >
      <SideBar />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "3rem 1rem",
        }}
      >
        <InvoiceInfoContainer setOpenForm={setOpenForm} />
        <InvoiceList id={id} />
      </div>

      <Form
        title="Create Invoice"
        openForm={openForm}
        setOpenForm={setOpenForm}
      />
    </div>
  );
}

export default Dashboard;
