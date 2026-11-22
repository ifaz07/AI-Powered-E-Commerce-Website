import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ComingSoon from './pages/ComingSoon.jsx'
import PageLoader from './components/PageLoader.jsx'

// Loaded only when visited. Keeps Firebase (used for Google sign-in) out of the home page download.
const Login = lazy(() => import('./pages/Login.jsx'))
const Registration = lazy(() => import('./pages/Registration.jsx'))

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<ComingSoon title="Collections" />} />
        <Route path="/about" element={<ComingSoon title="About" />} />
        <Route path="/contact" element={<ComingSoon title="Contact" />} />
        <Route path="/cart" element={<ComingSoon title="Cart" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Suspense>
  )
}

export default App
