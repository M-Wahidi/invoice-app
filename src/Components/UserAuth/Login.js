import { useState, useEffect } from "react";
import "./login.css";
import Logo from "../Global/Logo";
import googleIcon from "../../Assets/google-icon.png";
import { auth, googleProvider } from "../../API/firebaseconfig";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthCTX } from "../../Context/UserContext";
import Loading from "../Global/Loading";
import Error from "../Global/Error";
import addUserToDB from "../../Helper/addUserToDB";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function Login({ setShowForm, loading, setLoading, error, setError }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(
    localStorage.getItem("password-invoiceApp") || ""
  );
  const [rememberPassword, setRememberPassword] = useState(
    localStorage.getItem("password-invoiceApp") ? true : false
  );
  const { setUser } = AuthCTX();
  const [isShowPassword, setIsShowPassword] = useState(false);
  useEffect(() => {
    setPassword(localStorage.getItem("password-invoiceApp"));
  }, [error]);
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

    if (!rememberPassword) {
      localStorage.clear();
    } else {
      setRememberPassword(true);
      localStorage.setItem("password-invoiceApp", password);
    }

    setEmail("");
    setPassword("");
  };

  const handleLoginWithGoogle = async () => {
    setLoading(true);
    setError(false);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await setUser({ name: user.displayName, isAuth: true });
      addUserToDB(user.displayName, user.uid);
      localStorage.setItem(
        "isAuth",
        JSON.stringify({
          isAuth: true,
          name: user.displayName,
        })
      );
    } catch (err) {
      console.log(err.message);
      setLoading(false);
    }
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
              <div style={{ position: "relative", cursor: "pointer" }}>
                <input
                  className="password-input"
                  type={`${isShowPassword ? "text" : "password"}`}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="on"
                />
                <span
                  onClick={() => setIsShowPassword((prev) => !prev)}
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "7px",
                    fontSize: "20px",
                  }}
                >
                  {isShowPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>

              <div className="login-remember">
                <div>
                  <input
                    style={{ marginRight: "5px" }}
                    type="checkbox"
                    defaultChecked={rememberPassword || ""}
                    id="remember-user"
                    onChange={() => setRememberPassword((prev) => !prev)}
                  />
                  <label htmlFor="remember-user">Remember Me</label>
                </div>

                <label
                  style={{
                    cursor: "pointer",
                    textAlign: "right",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  onClick={() => setShowForm(2)}
                >
                  Forget Password?
                </label>
              </div>
              <button type="submit" className="login-btn">
                LOGIN
              </button>
            </form>
            <h4>Or login with</h4>
            <button
              onClick={handleLoginWithGoogle}
              className="btn google-signin"
            >
              <img src={googleIcon} alt="Google" /> Google
            </button>
            <h4>
              Not a member?
              <u
                style={{ marginLeft: "5px" }}
                className="signup-btn"
                onClick={() => setShowForm(1)}
              >
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
