import React, { useState } from "react";
import Overlay from "../Global/Overlay";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import ItemList from "./ItemList";
import FormFooter from "./FormFooter";
function Form({ title, openForm, setOpenForm }) {
  const { width } = useWindowDimensions();
  const [items, setItems] = useState([]);

  return (
    <>
      <div
        className="form-container"
        style={{
          left: `${
            openForm && width <= 768
              ? "0px"
              : openForm && width > 768
              ? "90px"
              : width <= 768 && !openForm
              ? "-800px"
              : "-700px"
          }`,
        }}
      >
        <h2 style={{ color: "#fff", marginTop: "2.5rem", marginLeft: "1rem" }}>
          {title}
        </h2>
        <BillFrom />
        <BillTo />
        <InvoiceInfo />
        <ItemList items={items} setItems={setItems} />
        <FormFooter
          opitionOne={"Discard"}
          opitionTwo={"Save as Draft"}
          opitionThree={"Save & Send"}
          setOpenForm={setOpenForm}
        />
      </div>
      {openForm && <Overlay />}
    </>
  );
}

export default Form;
