import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import FarmerDashboard from './pages/farmer/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App