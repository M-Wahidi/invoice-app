import React, { useRef } from "react";
import { ThemeFunc } from "../../Context/ThemeContext";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
function FormFooter({ opitionOne = "", opitionTwo = "", opitionThree = "", setHandleAddItem, setOpenForm, setInvoiceStatus, title }) {
  const { theme } = ThemeFunc();
  const { width } = useWindowDimensions();
  const cancelBtn = useRef();

  const handleDiscardClick = () => {
    setOpenForm((prev) => !prev);
  };

  const handleDraftClick = (e) => {
    if (title === "Edit Invoice") {
      setOpenForm((prev) => !prev);
      e.preventDefault();
    }
    setInvoiceStatus("Draft");
  };

  const handleSaveClick = (e) => {
    setInvoiceStatus("Pending");
  };

  return (
    <div
      className='from-footer'
      style={{
        display: "flex",
        justifyContent: `${title === "Create Invoice" ? "space-between" : "flex-end"}`,
        padding: "1rem ",
        alignItems: "center",
        position: "sticky",
        bottom: 0,
        backgroundColor: `${theme ? "rgb(249, 250, 250)" : "#141625"}`,
      }}
    >
      {opitionOne && (
        <button
          onClick={handleDiscardClick}
          style={{
            cursor: "pointer",
            color: `${theme ? "rgb(126, 136, 195)" : "#fff"}`,
            backgroundColor: `${theme ? "#f0f5f0" : "#1f213a"}`,
            opacity: 0.9,
            padding: ".7rem 1.5rem",
            fontSize: ".9rem",
            borderRadius: "20px",
            border: "none",
            marginLeft: "1rem",
            fontWeight: "bold",
          }}
        >
          {opitionOne}
        </button>
      )}
      <div
        style={{
          display: "flex",
          gap: `${width < 335 ? "" : ".5rem"}`,
          flexDirection: `${width < 335 ? "column" : "row"}`,
        }}
      >
        {opitionTwo && (
          <button ref={cancelBtn} onClick={handleDraftClick} style={buttonTwo}>
            {opitionTwo}
          </button>
        )}
        {opitionThree && (
          <button onClick={handleSaveClick} style={buttonOne}>
            {opitionThree}
          </button>
        )}
      </div>
    </div>
  );
}

const buttonOne = {
  backgroundColor: "#7c5df9",
  color: "#fff",
  padding: ".7rem 1rem",
  fontSize: ".9rem",
  borderRadius: "20px",
  border: "none",
  marginLeft: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
};
const buttonTwo = {
  backgroundColor: "#1f213a",
  opacity: 0.9,
  color: "#fff",
  padding: ".7rem 1rem",
  fontSize: ".9rem",
  borderRadius: "20px",
  border: "none",
  marginLeft: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
};

export default FormFooter;
