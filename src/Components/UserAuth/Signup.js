import { useState } from "react";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../API/firebaseconfig";
import "./signup.css";
import Logo from "../Global/Logo";
import { AuthCTX } from "../../Context/UserContext";
import addUserToDB from "../../Helper/addUserToDB";

function Signup({ setShowForm, loading, setLoading, error, setError }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassowrd] = useState("");
  const { createUser } = AuthCTX();

  const handleCreateUser = async (e, auth, email, passowrd) => {
    e.preventDefault();
    if (password !== confirmPassword) {
    }
    try {
      const userCredential = await createUser(email, passowrd);
      const user = userCredential.user;
      await addUserToDB(username, user.uid);
      await updateProfile(auth.currentUser, {
        displayName: username,
      });
    } catch (err) {
      console.log(err.message);
    }

    // Reset Form
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassowrd("");
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <Logo />
        <h1>SIGNUP</h1>
        <form onSubmit={(e) => handleCreateUser(e, auth, email, password)}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassowrd(e.target.value)}
          />
          <button type="submit" className="signup-btn">
            signup
          </button>
        </form>
        <h4>
          You Have account?
          <u className="login-btn" onClick={() => setShowForm(true)}>
            Login in now
          </u>
        </h4>
      </div>
    </div>
  );
}

export default Signup;
