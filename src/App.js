import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthProvider from './components/auth';
import NavBar from './components/NavBar/NavBar';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
