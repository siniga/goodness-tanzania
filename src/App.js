import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import DestinationPage from "./pages/destination/DestinationPage"
import ActivitiesScreen from "./pages/activities/ActivitiesScreen";
import AboutScreen from "./pages/about/AboutScreen";
import ContactScreen from "./pages/contact/ContactScreen";
import BlogScreen from "./pages/blog/BlogScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/activities" element={<ActivitiesScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/blog" element={<BlogScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
