
import AI from "./pages/AI";
import AIAssistant from "./components/ai/AIAssistant";
import { useState } from "react";

import AIButton from "./components/ai/AIButton";
import AIChat from "./components/ai/AIChat";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import Profile from "./pages/Profile";
import MyProperties from "./pages/MyProperties";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import VerifyCode from "./pages/VerifyCode";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddProperty from "./pages/AddProperty";
import NotFound from "./pages/NotFound";

function App() {
  const [openAI, setOpenAI] = useState(false);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/properties"
          element={<Properties />}
        />

        <Route
          path="/properties/:id"
          element={<PropertyDetails />}
        />

        <Route
          path="/favorites"
          element={<Favorites />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/verify"
          element={<VerifyCode />}
        />

        <Route
          path="/ai"
          element={<AI />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />

          <Route path="profile" element={<Profile />} />

          <Route path="properties" element={<MyProperties />} />

          <Route path="add-property" element={<AddProperty />} />

          <Route path="edit-property/:id" element={<AddProperty />} />
        </Route>


        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <AIButton
          onClick={() => setOpenAI(true)}
        />

        <AIChat
          open={openAI}
          onClose={() => setOpenAI(false)}
        />
      <Footer />
      <AIAssistant />
    </>
  );
}

export default App;