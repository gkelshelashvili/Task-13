import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth';
import Home from './pages/home';
import Acc from './pages/acc';
import ProtectedRoute from './components/Protected';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/acc"
          element={
            <ProtectedRoute>
              <Acc />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
