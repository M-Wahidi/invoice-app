import Overlay from "./Overlay";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { useParams } from "react-router-dom";
function Modal({ type, setOpenModal, openModal, handleDelete }) {
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
          zIndex: 999,
          width: `${width < 520 ? "90%" : "500px"}`,
        }}
      >
        <Delete
          setOpenModal={setOpenModal}
          invoiceId={invoiceId}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  ) : (
    <div>
      <Logout />
    </div>
  );
}

const Delete = ({ setOpenModal, invoiceId, handleDelete }) => {
  return (
    <>
      <h3 style={{ paddingBottom: ".5rem" }}>
        Are You Sure You Want To Delete Invoice No. #{invoiceId}{" "}
      </h3>
      <button style={modalButtonStyle} onClick={handleDelete}>
        Delete
      </button>
      <button style={modalButtonStyle} onClick={() => setOpenModal(false)}>
        Cancel
      </button>
    </>
  );
};

const Logout = ({ action }) => {
  return (
    <div>
      <h4>Are You Sure You Want To Logout</h4>
      <button onClick={() => action}>Logout</button>
      <button>Cancel</button>
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
