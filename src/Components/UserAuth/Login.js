import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Logo from "../Global/Logo";
import googleIcon from "../../Assets/google-icon.png";
import { auth } from "../../API/firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthCTX } from "../../Context/UserContext";
import Loading from "../Global/Loading";
import Error from "../Global/Error";

function Login({ setShowForm, loading, setLoading, error, setError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = AuthCTX();

  const loginUser = (e, auth, email, passowrd) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    // Login User
    signInWithEmailAndPassword(auth, email, passowrd)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser({ name: user.displayName, isAuth: true });
        localStorage.setItem(
          "isAuth",
          JSON.stringify({
            isAuth: true,
            name: user.displayName,
          })
        );
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        setTimeout(() => {
          setError(error.message);
        }, 300);
        setLoading(false);
      });

    // Reset Form
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <Logo />

        <h1>LOGIN</h1>
        {loading && <Loading type={"spin"} color={"white"} />}
        {!loading && (
          <>
            <form onSubmit={(e) => loginUser(e, auth, email, password)}>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="login-remmberme">
                <input type="checkbox" id="remmber-user" />
                <label htmlFor="remmber-user">Remember Me</label>
              </div>
              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </form>
            <h4>Or login with</h4>
            <button className="btn google-signin">
              <img src={googleIcon} alt="Google" /> Google
            </button>
            <h4>
              Not a member?{" "}
              <u className="signup-btn" onClick={() => setShowForm(false)}>
                Sign up now
              </u>
            </h4>
          </>
        )}
      </div>
      <Error text={error} position={error ? 0 : -60} />
    </div>
  );
}

export default Login;
