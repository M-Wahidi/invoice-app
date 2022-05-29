import { useState } from "react";
import Login from "../Components/UserAuth/Login";
import Signup from "../Components/UserAuth/Signup";

function UserAuth() {
  const [showForm, setShowForm] = useState(true);
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
      {showForm && <Login setShowForm={setShowForm} {...opitions} />}
      {!showForm && <Signup setShowForm={setShowForm} {...opitions} />}
    </div>
  );
}

export default UserAuth;
