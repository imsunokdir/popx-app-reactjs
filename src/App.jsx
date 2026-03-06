import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopXWelcome from "./pages/PopXWelcome";
import MobileLayout from "./components/MobileLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  return (
    <BrowserRouter>
      <MobileLayout>
        <Routes>
          <Route path="/" element={<PopXWelcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<AccountSettings />} />
        </Routes>
      </MobileLayout>
    </BrowserRouter>
  );
}
