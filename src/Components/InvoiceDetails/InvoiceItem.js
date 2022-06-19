import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

function InvoiceItem({ data }) {
  const { width } = useWindowDimensions();

  return (
    <div
      style={{
        display: "flex",
        marginTop: `${width > 700 ? "2rem" : "1rem"}`,
        justifyContent: `${width < 700 && "space-between"}`,
        fontSize: `${width < 700 ? "14px" : "16px"}`,
      }}
    >
      <h4
        style={{
          minWidth: `${width < 700 ? "auto " : "35%"}`,
        }}
      >
        {data?.name}
      </h4>
      <h4
        style={{
          textAlign: "center",
          minWidth: "15% ",
          display: `${width < 700 ? "none " : ""}`,
        }}
      >
        {data?.price}
      </h4>
      <h4
        style={{
          minWidth: "15% ",
          textAlign: "center",
          display: `${width < 700 ? "none " : ""}`,
        }}
      >
        {data?.qty}
      </h4>
      <h4
        style={{
          minWidth: `${width < 700 ? "auto" : "35%"}`,
          textAlign: "right",
        }}
      >
        {data?.total}
      </h4>
    </div>
  );
}

export default InvoiceItem;
