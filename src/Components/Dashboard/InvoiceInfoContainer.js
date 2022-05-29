import React from "react";
import HomePageTitle from "./HomePageTitle";
import FilterInvoice from "./FilterInvoice";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

import AddInvoiceButton from "./AddInvoiceButton";

function InvoiceInfoContainer({ setOpenForm }) {
  const { width } = useWindowDimensions();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "12vh",
          width: "100%",
          padding: ".5rem",
          overflow: "hidden",
        }}
      >
        <>
          <HomePageTitle />
        </>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: `${width < 900 ? "1rem" : "2.5rem"}`,
          }}
        >
          <FilterInvoice />
          <AddInvoiceButton setOpenForm={setOpenForm} />
        </div>
      </div>
    </>
  );
}

export default InvoiceInfoContainer;