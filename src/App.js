import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/Auth/auth';
import { NavBar } from './components/NavBar/NavBar';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Dashboard /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
