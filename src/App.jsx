import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyDashboard from "./pages/MyDashboard";
import ManageEvents from "./pages/ManageEvents";
import Help from "./pages/Help";
import NavigationHeader from "./components/NavigationHeader";
import { EventProvider, EventContext } from "./context/EventContextAPI";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

//app func
function App() {
  return (
    <EventProvider>
      <Router>
        <NavigationHeader />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute><MyDashboard /></ProtectedRoute>} />
          <Route path="/manage-events" element={<ProtectedRoute><ManageEvents/></ProtectedRoute>} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </EventProvider>
  );
}

//blockS unauthenticated access
function ProtectedRoute({ children }) {
  const { user } = React.useContext(EventContext);
  return user ? children : <Navigate to="/login" />;
}

export default App;
