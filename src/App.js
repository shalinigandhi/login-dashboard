import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/Auth/auth';
import { NavBar } from './components/NavBar/NavBar';
import { Home } from './components/Home/Home';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { RequireAuth } from "./components/Auth/RequireAuth";

function App() {
  return (
    <div>
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/dashboard" element={ <RequireAuth><Dashboard/></RequireAuth> } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
