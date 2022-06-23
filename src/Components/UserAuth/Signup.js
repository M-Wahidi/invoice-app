import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../../API/firebaseconfig";
import "./signup.css";
import Logo from "../Global/Logo";
import { AuthCTX } from "../../Context/UserContext";
import addUserToDB from "../../Helper/addUserToDB";
import Error from "../Global/Error";
import Loading from "../Global/Loading";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
function Signup({ setShowForm, loading, setLoading, error, setError }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPasswordOne, setIsShowPasswordOne] = useState(false);
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const [isShowPasswordTwo, setIsShowPasswordTwo] = useState(false);

  const { createUser } = AuthCTX();
  const { setUser } = AuthCTX();

  const handleCreateUser = async (e, auth, email, passowrd) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    if (password !== confirmPassword) {
      setTimeout(() => {
        setError("Password Not Match");
        setLoading(false);
      }, 500);
      return;
    }
    try {
      const userCredential = await createUser(email, passowrd);
      const user = userCredential.user;
      await addUserToDB(username, user.uid);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
      setUser({ name: user.displayName, isAuth: true });
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    // Reset Form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassowrd("");
  };
  return (
    <div className='signup-background'>
      <div className='signup-container'>
        <Logo />
        <h1>SIGNUP</h1>
        {loading && <Loading type={"spin"} color={"white"} />}
        {!loading && (
          <>
            <form onSubmit={(e) => handleCreateUser(e, auth, email, password)}>
              <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <div style={{ position: "relative", cursor: "pointer" }}>
                <input
                  className='password-input'
                  type={`${isShowPasswordOne ? "text" : "password"}`}
                  placeholder='Password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='on'
                />
                <span onClick={() => setIsShowPasswordOne((prev) => !prev)} style={{ position: "absolute", top: "20px", right: "7px", fontSize: "20px" }}>
                  {isShowPasswordOne ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>

              <div style={{ position: "relative", cursor: "pointer" }}>
                <input
                  className='password-input'
                  type={`${isShowPasswordTwo ? "text" : "password"}`}
                  placeholder='Confirm Password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassowrd(e.target.value)}
                  autoComplete='on'
                />
                <span onClick={() => setIsShowPasswordTwo((prev) => !prev)} style={{ position: "absolute", top: "20px", right: "7px", fontSize: "20px" }}>
                  {isShowPasswordTwo ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>

              <button type='submit' className='signup-btn'>
                signup
              </button>
            </form>
            <h4>
              You Have account?
              <u style={{ marginLeft: "5px" }} className='login-btn' onClick={() => setShowForm(0)}>
                Login in now
              </u>
            </h4>
          </>
        )}
      </div>
      <Error text={error} position={error ? 0 : -60} />
    </div>
  );
}

export default Signup;
