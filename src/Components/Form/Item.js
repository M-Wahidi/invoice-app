import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { ThemeFunc } from "../../Context/ThemeContext";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";

function Item({
  handleDelete,
  id = "",
  addItem,
  handleAddItem,
  setItemsList,
  item,
  title,
  setOldBillFromInvoice,
  handleChcekInput,
}) {
  const [itemName, setItemName] = useState("");
  const [itemQTY, setItemQty] = useState("");
  const [itemPrice, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const { theme } = ThemeFunc();

  const handleUpdateTotal = () => {
    setTotal(itemPrice * itemQTY);
  };
  const { width } = useWindowDimensions();

  useEffect(() => {
    handleUpdateTotal();
  }, [itemPrice, itemQTY]);

  useEffect(() => {
    if (handleAddItem) {
      addItem(id, itemName, itemQTY, itemPrice, total);
      setItemsList([]);
      if (title === "Edit Invoice") setOldBillFromInvoice([]);
    }
  }, [handleAddItem]);

  useEffect(() => {
    if (title === "Edit Invoice") {
      setItemQty(item.qty);
      setItemName(item.name);
      setPrice(item.price);
      setTotal(item.total);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: ".5rem",
        alignItems: "center",
        flexWrap: `${width < 375 ? "wrap" : ""}`,
        position: "relative",
        maxWidth: "570px",
      }}
    >
      <div
        className="item-name-from"
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: `${width < 375 ? "50%" : "40%"}`,
        }}
      >
        <label
          style={{
            color: `${theme ? "#333" : "#fff"}`,
            position: "relative",
            bottom: "2px",
          }}
          htmlFor="tem-name-from"
        >
          Item Name
        </label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.name : ""}
          onChange={(e) => setItemName(e.target.value)}
          required
          type="text"
          style={{
            position: "relative",
            maxWidth: "300px",
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            border: `${
              itemName === "" && handleChcekInput
                ? "1px solid rgb(236, 87, 87)"
                : theme
                ? "1px solid rgb(223, 227, 250) "
                : ""
            }`,
            color: `${theme ? "#333" : "#fff"}`,
          }}
        />
      </div>

      <div
        className="item-qty-from"
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: `${width < 375 ? "18%" : "70px"}`,
        }}
      >
        <label
          style={{
            color: `${theme ? "#333" : "#fff"}`,
            position: "relative",
            bottom: "2px",
          }}
          htmlFor="item-qty-from"
        >
          Qty.
        </label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.qty : ""}
          onChange={(e) => setItemQty(e.target.value)}
          required
          type="number"
          min={0}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            border: `${
              itemQTY === "" && handleChcekInput
                ? "1px solid rgb(236, 87, 87)"
                : theme
                ? "1px solid rgb(223, 227, 250) "
                : ""
            }`,
            color: `${theme ? "#333" : "#fff"}`,
            textAlign: "center",
            margin: "0",
            padding: "0",
          }}
        />
      </div>

      <div
        className="item-price-from"
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: `${width < 375 ? "25%" : "20%"}`,
        }}
      >
        <label
          style={{
            color: `${theme ? "#333" : "#fff"}`,
            position: "relative",
            bottom: "2px",
          }}
          htmlFor="item-price-from"
        >
          Price
        </label>
        <input
          defaultValue={title === "Edit Invoice" ? item?.price : ""}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          required
          min={0}
          style={{
            border: `${
              itemPrice === "" && handleChcekInput
                ? "1px solid rgb(236, 87, 87)"
                : theme
                ? "1px solid rgb(223, 227, 250) "
                : ""
            }`,
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
          }}
        />
      </div>
      <div
        style={{
          width: "110px",
          textAlign: "center",
          height: "75px",
          alignSelf: "flex-end",
          borderRadius: "5px",
          position: "relative",
          flexBasis: `${width < 375 ? "75%" : "25%"}`,
        }}
      >
        <label
          style={{
            color: `${theme ? "#333" : "#fff"}`,
            position: "relative",
          }}
          htmlFor="item-total-from"
        >
          Total
        </label>
        {
          <p
            style={{
              color: `${theme ? "#333" : "#fff"}`,
              position: "relative",
              top: "13px",
            }}
          >
            {total || 0}
          </p>
        }
      </div>
      <div
        onClick={() => id && handleDelete(id)}
        style={{
          cursor: "pointer",
          color: `${theme ? "#333" : "#fff"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "60px",
          fontSize: "1.5rem",
          paddingTop: "25px",

          flexBasis: `7%`,
        }}
      >
        <AiFillDelete />
      </div>
    </div>
  );
}

export default React.memo(Item);
