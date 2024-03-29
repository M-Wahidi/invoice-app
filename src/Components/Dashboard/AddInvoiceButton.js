import React from "react";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

function AddInvoiceButton({ setOpenForm }) {
  const { width } = useWindowDimensions();

  const handleOpenForm = () => {
    setOpenForm((prev) => !prev);
  };
  return (
    <div
      onClick={handleOpenForm}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: `${width < 300 ? "0" : width < 700 ? ".4rem" : ".7rem"}`,
        padding: `${width < 450 ? ".4rem .8rem" : ".7rem .8rem"}`,
        background: "#7c5df9",
        color: "#fff",
        borderRadius: "30px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          background: "#fff",
          height: "30px",
          width: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          color: "#7c5df9",
          fontWeight: "bold",
          fontSize: "1.2rem",
          left: 0,
        }}
      >
        +
      </div>
      <div> {width < 300 ? "" : width < 700 ? "New" : "New Invoice"} </div>
    </div>
  );
}

export default AddInvoiceButton;
