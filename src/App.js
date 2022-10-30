import Navbar from "./Navbar"
import Spaces from "./pages/Spaces"
import Home from "./pages/Home"
import Discover from "./pages/Discover"
import Consult from './pages/Consult'
import Routines from './pages/Routines'
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/spaces" element={<Spaces />} />
          <Route path="/consult" element={<Consult />} />
          <Route path="/routines" element={<Routines />} />
        </Routes>
      </div>
    </>
  )
}

export default App