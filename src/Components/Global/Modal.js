import Overlay from "./Overlay";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { useParams } from "react-router-dom";
function Modal({ type, setOpenModal, openModal, handleDelete, handleSignOut }) {
  const { invoiceId } = useParams();
  const { width } = useWindowDimensions();
  return type === "delete" ? (
    <div style={{ display: `${openModal ? "block" : "none"}` }}>
      <Overlay />
      <div
        style={{
          backgroundColor: "#7c5df9",
          color: "#fff",
          textAlign: "center",
          padding: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "6px",
          width: `${width < 520 ? "90%" : "500px"}`,
          zIndex: 3,
        }}
      >
        <Delete setOpenModal={setOpenModal} invoiceId={invoiceId} handleDelete={handleDelete} />
      </div>
    </div>
  ) : (
    <div style={{ display: `${openModal ? "block" : "none"}` }}>
      <Overlay />

      <div
        style={{
          backgroundColor: "#7c5df9",
          color: "#fff",
          textAlign: "center",
          padding: "2rem",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "6px",
          width: `${width < 520 ? "90%" : "500px"}`,
          zIndex: 3,
        }}
      >
        <Logout setOpenModal={setOpenModal} handleSignOut={handleSignOut} />
      </div>
    </div>
  );
}

const Delete = ({ setOpenModal, invoiceId, handleDelete }) => {
  return (
    <div>
      <h3 style={{ paddingBottom: ".5rem" }}>Are You Sure You Want To Delete Invoice No. #{invoiceId} </h3>
      <button style={modalButtonStyle} onClick={handleDelete}>
        Delete
      </button>
      <button style={modalButtonStyle} onClick={() => setOpenModal(false)}>
        Cancel
      </button>
    </div>
  );
};

const Logout = ({ setOpenModal, handleSignOut }) => {
  return (
    <div>
      <h3 style={{ paddingBottom: ".5rem" }}>Are You Sure You Want To Logout</h3>
      <button style={{ ...modalButtonStyle, ...btnColorLogout }} onClick={handleSignOut}>
        Logout
      </button>
      <button style={{ ...modalButtonStyle, ...btnColorCancel }} onClick={() => setOpenModal(false)}>
        Cancel
      </button>
    </div>
  );
};

export default Modal;

const modalButtonStyle = {
  cursor: "pointer",
  color: "white",
  padding: ".5rem 1rem",
  margin: "10px",
  border: "none",
  fontSize: "1rem",
};

const btnColorLogout = {
  backgroundColor: "rgb(209, 86, 86)",
};
const btnColorCancel = {
  backgroundColor: "#9277ff",
};
