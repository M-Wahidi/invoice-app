import React, { useEffect, useState, useRef } from "react";
import Overlay from "../Global/Overlay";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfo from "./InvoiceInfo";
import useWindowDimensions from "../../CustomHooks/useWindowDimensions";
import ItemList from "./ItemList";
import FormFooter from "./FormFooter";
import generateInvoiceNo from "../../Helper/generateInvoiceNo";
import clearForm from "../../Helper/clearForm";
import { doc, arrayUnion, setDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../../API/firebaseconfig";
import getTodayDate from "../../Helper/getTodayDate";
import { useLocation } from "react-router-dom";
import { ThemeFunc } from "../../Context/ThemeContext";
import Loading from "../Global/Loading";
function Form({ title, openForm, setOpenForm }) {
  const { width } = useWindowDimensions();
  const [handleAddItem, setHandleAddItem] = useState(false);
  const [items, setItems] = useState([]);
  const [addressFrom, setAddressFrom] = useState({});
  const [addressTo, setAddressTo] = useState({});
  const [discrpition, setDiscrpition] = useState("");
  const [invoiceDate, setInvoiceDate] = useState(getTodayDate());
  const [payemntTerms, setPaymentTerms] = useState("");
  const [invoiceStatus, setInvoiceStatus] = useState("");
  const [error, setError] = useState(false);
  const [handleChcekInput, setHandleChechkInput] = useState(false);
  const invoicePath = useLocation();
  const { theme } = ThemeFunc();
  const isListEmpty = useRef(null);

  const sendInvoice = async () => {
    if (error) return;

    const invoiceRef = doc(db, "Users", auth.currentUser.uid);
    if (title !== "Edit Invoice") {
      await setDoc(
        invoiceRef,
        {
          invoiceList: arrayUnion({
            addressFrom,
            addressTo,
            discrpition,
            invoiceDate: invoiceDate || getTodayDate(),
            payemntTerms: payemntTerms || "Net 30 Days",
            items,
            invoiceStatus,
            invoiceNo: generateInvoiceNo(),
          }),
        },
        { merge: true }
      );
    }
  };

  const editDoc = async () => {
    const targetInvoice = doc(db, "Users", auth.currentUser.uid);
    const invoice = await getDoc(targetInvoice, (doc) => doc);
    const invoiceID = invoicePath.pathname.split("/")[2];
    const invoiceList = invoice.data().invoiceList.map((invoice) => {
      if (invoice.invoiceNo === invoiceID) {
        return (invoice = {
          addressFrom,
          addressTo,
          discrpition,
          invoiceDate: invoiceDate || getTodayDate(),
          payemntTerms,
          items,
          invoiceStatus,
          invoiceNo: invoiceID,
        });
      } else {
        return invoice;
      }
    });

    await setDoc(
      targetInvoice,
      {
        invoiceList,
      },
      { merge: true }
    );
  };

  const addFromAddress = (streetAddress, city, postCode, country) => {
    setAddressFrom(streetAddress, city, postCode, country);
    setHandleAddItem(false);
  };

  const addToAddress = (streetAddress, city, postCode, country) => {
    setAddressTo(streetAddress, city, postCode, country);
    setHandleAddItem(false);
  };

  const addItem = (id, name, qty, price, total) => {
    setItems((prev) => [...prev, { id, name, qty, price, total }]);
    setHandleAddItem(false);
  };

  const getInvoiceBillFormData = async (setData) => {
    if (!invoicePath.pathname.includes("/dashboard")) {
      const invoiceID = invoicePath.pathname.split("/")[2];
      const targetInvoice = doc(db, "Users", auth.currentUser.uid);
      const invoice = await getDoc(targetInvoice, (doc) => doc);
      const { invoiceList } = invoice.data();
      const currentInvoice = invoiceList.find(
        (elem) => elem.invoiceNo === invoiceID
      );
      setData(currentInvoice);
    }
  };

  useEffect(() => {
    if (items.length > 0) {
      if (title === "Edit Invoice") {
        editDoc();
        setItems([]);
        return;
      }
      sendInvoice();
    }
    if (handleAddItem === false) {
      setItems([]);
      return;
    }
  }, [handleAddItem]);

  useEffect(() => {
    setHandleChechkInput(false);
    if (openForm && title === "Create Invoice") {
      clearForm([setDiscrpition, setInvoiceDate, setPaymentTerms]);
    } else {
      setError(false);
    }
  }, [openForm]);

  const checkEmptyItem = (list) => {
    if (list.length === 0) {
      isListEmpty.current = false;
    } else {
      isListEmpty.current = true;
    }
  };

  const handleSubmitInvoice = (e) => {
    e.preventDefault();
    if (isListEmpty.current === false) return;
    setHandleAddItem(true);
    setOpenForm((prev) => !prev);
  };

  return (
    <>
      <div
        className="form-container"
        style={{
          left: `${
            openForm && width <= 950
              ? "0px"
              : openForm && width > 768
              ? "90px"
              : width <= 950 && !openForm
              ? "-800px"
              : "-700px"
          }`,
          backgroundColor: `${theme ? "#fff" : "#141625"}`,
          zIndex: 3,
        }}
      >
        <h2
          style={{
            color: `${theme ? "#333" : "#fff"}`,
            marginTop: "2.5rem",
            marginLeft: "1rem",
          }}
        >
          {title}
        </h2>
        <form onSubmit={handleSubmitInvoice}>
          <BillFrom
            handleAddItem={handleAddItem}
            addFromAddress={addFromAddress}
            openForm={openForm}
            title={title}
            getInvoiceBillFormData={getInvoiceBillFormData}
            handleChcekInput={handleChcekInput}
          />
          <BillTo
            handleAddItem={handleAddItem}
            addToAddress={addToAddress}
            openForm={openForm}
            title={title}
            handleChcekInput={handleChcekInput}
          />
          <InvoiceInfo
            handleAddItem={handleAddItem}
            setDiscrpition={setDiscrpition}
            setInvoiceDate={setInvoiceDate}
            setPaymentTerms={setPaymentTerms}
            invoiceDate={invoiceDate}
            discrpition={discrpition}
            payemntTerms={payemntTerms}
            openForm={openForm}
            title={title}
            getInvoiceBillFormData={getInvoiceBillFormData}
            handleChcekInput={handleChcekInput}
          />
          <ItemList
            setItems={setItems}
            handleAddItem={handleAddItem}
            addItem={addItem}
            openForm={openForm}
            title={title}
            checkEmptyItem={checkEmptyItem}
            handleChcekInput={handleChcekInput}
          />
          {handleChcekInput && (
            <div style={{ paddingLeft: "1.5rem" }}>
              <p style={{ color: "rgb(236, 87, 87)", fontSize: "12px" }}>
                - All fields must be filled.
              </p>
              <p style={{ color: "rgb(236, 87, 87)", fontSize: "12px" }}>
                - An item must be added.
              </p>
            </div>
          )}
          <FormFooter
            opitionOne={title === "Create Invoice" ? "Discard" : ""}
            opitionTwo={title === "Create Invoice" ? "Save as Draft" : "Cancel"}
            opitionThree={
              title === "Create Invoice" ? "Save & Send" : "Save Changes"
            }
            setOpenForm={setOpenForm}
            setHandleAddItem={setHandleAddItem}
            handleAddItem={handleAddItem}
            setInvoiceStatus={setInvoiceStatus}
            invoiceStatus={invoiceStatus}
            title={title}
            addressFrom={addressFrom}
            error={error}
            items={items}
            setHandleChechkInput={setHandleChechkInput}
          />
        </form>
      </div>

      {openForm && <Overlay setOpenForm={setOpenForm} />}
    </>
  );
}

export default React.memo(Form);
