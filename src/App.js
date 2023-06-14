import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from './components/Auth/auth';
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Login } from "./components/Login/Login";
import { RequireAuth } from "./components/Auth/RequireAuth";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/dashboard" element={ <RequireAuth><Dashboard/></RequireAuth> } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
