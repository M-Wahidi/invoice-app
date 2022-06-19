import InvoiceItem from "./InvoiceItem";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import { ThemeFunc } from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

function InvoiceListItem({ invoice }) {
  const { width } = useWindowDimensions();
  const { theme } = ThemeFunc();

  const calcTotal = () => {
    if (invoice?.items?.length > 0) {
      const total = invoice.items.reduce((acc, item) => {
        return acc + item.total;
      }, 0);
      return total;
    }
  };

  return (
    <div
      style={{
        margin: " 1rem",
        backgroundColor: `${theme ? "rgb(249, 250, 254)" : "#252945"}`,
        marginTop: "1.5rem",
        borderRadius: "6px",
      }}
    >
      <div style={{ padding: `${width < 700 ? "1.2rem" : "2rem 2rem"}` }}>
        <div
          style={{
            display: `${width < 700 ? "none " : "flex"}`,
            color: "rgb(136, 142, 176)",
          }}
        >
          <p style={{ minWidth: "35%" }}>Item Name</p>
          <p
            style={{
              minWidth: "15%",
              textAlign: "center",
            }}
          >
            QTY.
          </p>
          <p
            style={{
              minWidth: "15%",
              textAlign: "center",
            }}
          >
            Price
          </p>
          <p
            style={{
              minWidth: "35%",
              textAlign: "right",
            }}
          >
            Total
          </p>
        </div>
        {invoice?.items &&
          invoice?.items.map((data, key) => (
            <InvoiceItem key={key} data={data} />
          ))}
      </div>
      <div
        style={{
          backgroundColor: `${theme ? "#373B53" : "black"}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `${width < 700 ? "2rem 1.5rem" : "2rem 2.5rem"}`,
          borderRadius: "10px",
        }}
      >
        <h4
          style={{
            fontSize: `${width < 700 ? "14px" : "16px"}`,
            color: `${theme ? "#fff" : ""}`,
          }}
        >
          Amount Due
        </h4>

        <h4
          style={{
            fontSize: `${width < 700 ? "20px" : "22px"}`,
            color: `${theme ? "#fff" : ""}`,
          }}
        >
          ${calcTotal()}
        </h4>
      </div>
    </div>
  );
}

export default InvoiceListItem;
