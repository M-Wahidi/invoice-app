import { AuthCTX } from "react";
import { Outlet, useNavigate } from "react-router-dom";
function ProtectedRoutes() {
  const navigate = useNavigate();
  const { user } = AuthCTX();

  return user.isAuth ? <Outlet /> : navigate("/");
}

export default ProtectedRoutes;
