// src/class1/A01028415/App.tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function Class1() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

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
      
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default Class1