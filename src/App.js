import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import UserAuth from "./Pages/UserAuth";
import { ThemeFunc } from "./Context/ThemeContext";
import { AuthCTX } from "./Context/UserContext";
import Dashboard from "./Pages/Dashboard";
import InvoiceDetails from "./Pages/InvoiceDetails";
import Form from "./Components/Form/Form";
import SideBar from "./Components/Global/SideBar";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

function App() {
  const { theme } = ThemeFunc();
  const { user } = AuthCTX();
  const [openForm, setOpenForm] = useState(false);
  const location = useLocation().pathname;
  const [isOpenProfile, setIsOpenProfile] = useState(false);

  return (
    <div
      className="App"
      style={{
        backgroundColor: `${theme ? "#F8F8FB" : "#141625"}`,
      }}
    >
      {isOpenProfile && <ProfilePage setIsOpenProfile={setIsOpenProfile} />}
      <Form
        title={`${
          location.includes("/dashboard") ? "Create Invoice" : "Edit Invoice"
        }`}
        openForm={openForm}
        setOpenForm={setOpenForm}
      />
      {user?.isAuth && <SideBar setIsOpenProfile={setIsOpenProfile} />}
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route
          path="/dashboard/:id"
          element={<Dashboard openForm={openForm} setOpenForm={setOpenForm} />}
        />
        <Route
          path="/invoice/:invoiceId"
          element={
            <InvoiceDetails setOpenForm={setOpenForm} openForm={openForm} />
          }
        />

        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404 Not Found</h1>}
        />
      </Routes>
    </div>
  );
}

export default App;
