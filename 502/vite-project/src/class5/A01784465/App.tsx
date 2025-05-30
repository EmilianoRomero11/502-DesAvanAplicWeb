// src/class5/A01784465/App.tsx (or wherever this class is located)
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

const Class5 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('auth') === 'true'
    setIsLoggedIn(auth)
  }, [])

  const handleLogin = () => {
    localStorage.setItem('auth', 'true')
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    localStorage.removeItem('auth')
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <nav style={{ marginBottom: '20px' }}>
        <Link 
          to="/menu"
          style={{
            textDecoration: 'none',
            color: '#646cff',
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          ← Back to Classes Menu
        </Link>
      </nav>
      
      {isLoggedIn ? <Dashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </div>
  )
}

export default Class5