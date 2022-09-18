import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import { useState } from "react";

const ProtectRoute = ({ children, user }) => {
  return user ? children : <Navigate to="/login" />;
};
function App() {
  const [user, setUser] = useState(true);
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <ProtectRoute user={user}>
          <Home />
          // </ProtectRoute>
        }
      />
      <Route
        path="login"
        element={!user ? <Auth setUser={setUser} /> : <Navigate to="/" />}
      />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
