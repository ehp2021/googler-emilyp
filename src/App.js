import React from "react"
import Register from "./Register"
import { Container } from "react-bootstrap"
import { AuthProvider } from "./Contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"


function App() {
  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                {/* <Route path="/update-profile" component={UpdateProfile} /> */}
                <Route path="/register" element={<Register/>}  />
                <Route path="/login" element={<Login/>} />
                {/* <Route path="/forgot-password" component={ForgotPassword} /> */}
              </Routes>
            </AuthProvider>
          </Router>
        </div>
      </Container>
  )
}

export default App