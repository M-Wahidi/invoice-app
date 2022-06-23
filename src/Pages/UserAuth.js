import { useState } from "react";
import Login from "../Components/UserAuth/Login";
import ResetPassword from "../Components/UserAuth/ResetPassword";
import Signup from "../Components/UserAuth/Signup";
function UserAuth() {
  const [showForm, setShowForm] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const opitions = {
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <div>
      {showForm === 0 && <Login setShowForm={setShowForm} {...opitions} />}
      {showForm === 1 && <Signup setShowForm={setShowForm} {...opitions} />}
      {showForm === 2 && <ResetPassword setShowForm={setShowForm} {...opitions} />}
    </div>
  );
}

export default UserAuth;
