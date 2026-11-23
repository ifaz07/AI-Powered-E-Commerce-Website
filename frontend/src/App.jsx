import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Collections from './pages/Collections.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import AuthLayout from './components/AuthLayout.jsx'
import PageLayout from './components/PageLayout.jsx'

// Loaded only when visited. Keeps Firebase (used for Google sign-in) out of the home page download.
const Login = lazy(() => import('./pages/Login.jsx'))
const Registration = lazy(() => import('./pages/Registration.jsx'))

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/cart" element={<ComingSoon title="Cart" />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Route>
    </Routes>
  )
}

export default App
