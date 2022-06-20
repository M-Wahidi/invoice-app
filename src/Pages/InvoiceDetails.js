import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../API/firebaseconfig";
import InvoiceAction from "../Components/InvoiceDetails/InvoiceAction";
import InvoiceDetailsInfo from "../Components/InvoiceDetails/InvoiceDetailsInfo";
import InvoiceMiddle from "../Components/InvoiceDetails/InvoiceMiddle";
import InvoiceListItem from "../Components/InvoiceDetails/InvoiceListItem";
import useWindowDimensions from "../CustomHooks/useWindowDimensions";
import MobileActions from "../Components/InvoiceDetails/MobileActions";
import { MdArrowBackIosNew } from "react-icons/md";
import { doc, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../API/firebaseconfig";
import { motion } from "framer-motion";
import { ThemeFunc } from "../Context/ThemeContext";
import Loading from "../Components/Global/Loading";

function InvoiceDetails({ setOpenForm }) {
  const { width } = useWindowDimensions();
  const [invoice, setInvoice] = useState({});
  const { invoiceId } = useParams();
  const { theme } = ThemeFunc();
  const [loading, setLoading] = useState(false);

  const getInvoice = () => {
    const unsub = onSnapshot(doc(db, "Users", auth.currentUser.uid), (doc) => {
      setInvoice(doc.data().invoiceList.find((elem) => elem.invoiceNo === invoiceId));
    });

    return () => unsub;
  };

  useEffect(() => {
    if (auth.currentUser) {
      getInvoice();
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: `${width < 950 ? "column" : "row"}`,
      }}
    >
      {loading && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
            top: 0,
            left: 0,
            position: "fixed",
          }}
        >
          {loading && <Loading type={"spin"} color={`${theme ? "black" : "white"}`} />}
        </div>
      )}
      <div style={{ width: "100%" }}>
        <motion.div initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 40 }}>
          <div
            style={{
              position: "relative",
              maxWidth: "900px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              padding: "2rem",
              left: `${width < 950 ? "0" : "50px"}`,
            }}
          >
            <Link
              style={{
                color: `${theme ? "#333" : "#fff"}`,
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
              }}
              to={`/dashboard/${auth.currentUser?.uid}`}
            >
              <span style={{ lineHeight: "0", color: "#9277FF" }}>
                <MdArrowBackIosNew />
              </span>
              Go back
            </Link>
            <InvoiceAction invoice={invoice} setInvoice={setInvoice} setOpenForm={setOpenForm} setLoading={setLoading} />
            <div
              style={{
                marginTop: "2rem",
                paddingBottom: ".5rem",
                marginBottom: `${width < 700 ? "6rem" : ".5rem"}`,
                backgroundColor: `${theme ? "#fff" : "#1E2139"}`,
                boxShadow: "rgb(72 84 159 / 10%) 0px 10px 10px",
                color: `${theme ? "#333" : "#fff"}`,
              }}
            >
              <InvoiceDetailsInfo invoice={invoice} />
              <InvoiceMiddle invoice={invoice} />
              <InvoiceListItem invoice={invoice} />
              {width < 700 && <MobileActions setInvoice={setInvoice} setOpenForm={setOpenForm} />}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
