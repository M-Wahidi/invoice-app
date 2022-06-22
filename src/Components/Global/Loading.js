import ReactLoading from "react-loading";

function Loading({ type, color }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        zIndex: 999999,
      }}
    >
      <ReactLoading type={type} color={color} className="loading" />
    </div>
  );
}

export default Loading;
