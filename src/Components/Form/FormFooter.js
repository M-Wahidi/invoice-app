import React from "react";

function FormFooter({
  opitionOne = "",
  opitionTwo = "",
  opitionThree = "",
  setOpenForm,
}) {
  const handleDiscardClick = () => {
    setOpenForm((prev) => !prev);
  };
  const handleDraftClick = () => {
    setOpenForm((prev) => !prev);
  };
  const handleSaveClick = () => {
    setOpenForm((prev) => !prev);
  };

  return (
    <div
      className="from-footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem ",
        alignItems: "center",
        position: "sticky",
        bottom: 0,
        backgroundColor: "#141625",
        background: "#141625",
      }}
    >
      {opitionOne && (
        <button
          onClick={handleDiscardClick}
          style={{
            cursor: "pointer",
            backgroundColor: "#1f213a",
            color: "#fff",
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
      <div style={{ display: "flex", gap: ".5rem" }}>
        {opitionTwo && (
          <button onClick={handleDraftClick} style={buttonTwo}>
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
