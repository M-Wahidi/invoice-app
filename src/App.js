import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserAuth from "./Pages/UserAuth";
import UserContext from "./Context/UserContext";
import { ThemeFunc } from "./Context/ThemeContext";
import Dashboard from "./Pages/Dashboard";

function App() {
  const { theme } = ThemeFunc();

  return (
    <Router>
      <UserContext>
        <div
          className="App"
          style={{
            backgroundColor: `${theme ? "#fff" : "#141625"}`,
          }}
        >
          <Routes>
            <Route path="/" element={<UserAuth />} />
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route
              path="*"
              element={<h1 style={{ textAlign: "center" }}>404 Not Found</h1>}
            />
          </Routes>
        </div>
      </UserContext>
    </Router>
  );
}

export default App;
