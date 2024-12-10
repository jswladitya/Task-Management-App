import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { setLocalStorage } from "./utils/LocalStorage";
function App() {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })

  const [user, setUser] = useState(null);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
    } else if (email == "user@me.com" && password == 123) {
      setUser("user");
    } else {
      alert("Invalid user credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashboard/>}
    </>
  );
}

export default App;
