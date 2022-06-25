import { useState, useEffect } from "react";
import clearForm from "../../Helper/clearForm";
import { useLocation } from "react-router-dom";
import { db, auth } from "../../API/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import { ThemeFunc } from "../../Context/ThemeContext";

function BillTo({ handleAddItem, addToAddress, openForm, title }) {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [country, setCountry] = useState("");
  const [oldBillFromInvoice, setOldBillFromInvoice] = useState({});
  const [error, setError] = useState(false);
  const invoicePath = useLocation();
  const { theme } = ThemeFunc();

  const getInvoiceBillFormData = async () => {
    if (!invoicePath.pathname.includes("/dashboard")) {
      const invoiceID = invoicePath.pathname.split("/")[2];
      const targetInvoice = doc(db, "Users", auth.currentUser.uid);
      const invoice = await getDoc(targetInvoice, (doc) => doc);
      const { invoiceList } = invoice.data();
      const currentInvoice = invoiceList.find((elem) => elem.invoiceNo === invoiceID);
      setOldBillFromInvoice(currentInvoice);
    }
  };

  const addressTo = {
    clientName,
    clientEmail,
    streetAddress,
    city,
    postCode,
    country,
  };
  const addressFunc = [setClientName, setClientEmail, setStreetAddress, setCity, setPostCode, setCountry];

  useEffect(() => {
    if (handleAddItem) {
      addToAddress({ ...addressTo });
    }
  }, [handleAddItem]);

  useEffect(() => {
    if (openForm && title === "Edit Invoice") {
      getInvoiceBillFormData();
    }
    if (!openForm) {
      clearForm(addressFunc);
      setError(false);
    }
  }, [openForm]);

  useEffect(() => {
    if (title === "Edit Invoice" && openForm) {
      setStreetAddress(oldBillFromInvoice?.addressTo?.streetAddress);
      setCity(oldBillFromInvoice?.addressTo?.city);
      setPostCode(oldBillFromInvoice?.addressTo?.postCode);
      setCountry(oldBillFromInvoice?.addressTo?.country);
      setClientEmail(oldBillFromInvoice?.addressTo?.clientEmail);
      setClientName(oldBillFromInvoice?.addressTo?.clientName);
    }
  }, [oldBillFromInvoice]);

  return (
    <div className='bill-to-container' style={{ flexWrap: "wrap" }}>
      <h3 style={{ paddingBottom: "1rem" }}>Bill To</h3>

      <div className='client-name'>
        <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='client-name'>
          Clinet Name
        </label>
        <input
          type='text'
          required
          onChange={(e) => setClientName(e.target.value)}
          value={clientName}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
            border: `${clientName === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
          }}
        />
      </div>

      <div className='client-email'>
        <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='client-email'>
          Clinet Email
        </label>
        <input
          type='text'
          required
          onChange={(e) => setClientEmail(e.target.value)}
          value={clientEmail}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
            border: `${clientEmail === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
          }}
        />
      </div>

      <div className='street-address-to'>
        <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='street-address-to'>
          Street Address
        </label>
        <input
          type='text'
          required
          onChange={(e) => setStreetAddress(e.target.value)}
          value={streetAddress}
          style={{
            backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
            color: `${theme ? "#333" : "#fff"}`,
            border: `${streetAddress === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <div className='city-to' style={{ flex: 1, minWidth: "180px" }}>
          <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='city-to'>
            City
          </label>
          <input
            type='text'
            required
            onChange={(e) => setCity(e.target.value)}
            value={city}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${city === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
            }}
          />
        </div>
        <div className='post__code-to' style={{ flex: 1, minWidth: "180px" }}>
          <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='city-to'>
            Post Code
          </label>
          <input
            type='text'
            required
            onChange={(e) => setPostCode(e.target.value)}
            value={postCode}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${postCode === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
            }}
          />
        </div>
        <div className='country-to' style={{ flex: 1, minWidth: "180px" }}>
          <label style={{ color: `${theme ? "#333" : "#fff"}` }} htmlFor='city-to'>
            Country
          </label>
          <input
            type='text'
            required
            onChange={(e) => setCountry(e.target.value)}
            value={country}
            style={{
              backgroundColor: `${theme ? "#fff" : "#1f213a"}`,
              color: `${theme ? "#333" : "#fff"}`,
              border: `${country === "" && error ? "1px solid rgb(236, 87, 87)" : theme ? "1px solid rgb(223, 227, 250) " : ""}`,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BillTo;
