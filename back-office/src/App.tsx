import Login from "./pages/Login"
import AuthRoutes from "./routes/AuthRoutes"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App: React.FC = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
