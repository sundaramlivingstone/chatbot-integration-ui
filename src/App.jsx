import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OrganizationSetup from "./components/OrganizationSetup";
import ChatbotIntegration from "./components/ChatbotIntegration";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/organization-setup" element={<OrganizationSetup />} />
      </Routes>
      <ChatbotIntegration />
      <Footer />
    </Router>
  );
};

export default App;
