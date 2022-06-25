import React, { useState } from "react";
import Logo from "../Global/Logo";
import Loading from "../Global/Loading";
import Error from "../Global/Error";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../API/firebaseconfig";
import { useEffect } from "react";
function ResetPassword({ setShowForm, loading, setLoading, error, setError }) {
  const [email, setEmail] = useState("");
  const [showResetMessage, setShowResetMessage] = useState(false);
  const [timer, setTimer] = useState(7);

  const handleResetEmail = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is Required, Please Enter Your Email");
      return;
    }
    setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    setLoading(true);
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setLoading(false);
        setShowResetMessage(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  };

  useEffect(() => {
    if (timer === 0) {
      setShowForm(0);
    }
  }, [timer]);

  return (
    <div className="reset-background">
      <div className="reset-container">
        <Logo />
        <h1>RESET PASSSOWRD</h1>
        {loading ? (
          <Loading type={"spin"} color={"white"} />
        ) : (
          <form style={{ paddingBottom: "1.7rem" }} onSubmit={handleResetEmail}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="reset-btn"
              style={{
                background: "#d33f8d",
                color: "#fff",
                cursor: "pointer",
              }}
              type="submit"
            />
          </form>
        )}
        {showResetMessage && (
          <p>
            Reset Link has been sent,
            <span
              style={{
                cursor: "pointer",
                marginLeft: "5px",
                textDecoration: "underline",
                color: "blue",
              }}
              onClick={() => setShowForm(0)}
            >
              Login here, Redirect in {timer}
            </span>
          </p>
        )}
        <button
          style={{
            cursor: "pointer",
            fontSize: ".8rem",
            height: "25px",
            position: "absolute",
            left: "5px",
            bottom: "2px",
          }}
          className="backHomeBtnStyle"
          onClick={() => setShowForm(0)}
        >
          Home
        </button>
      </div>
      <Error text={error} position={error ? 0 : -60} />
    </div>
  );
}

export default ResetPassword;
