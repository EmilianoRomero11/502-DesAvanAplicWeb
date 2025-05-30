// App.tsx
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ClassesMenu from './class1/A01028415/ClassesMenu/App'
import Class1 from './class1/A01028415/App'
import Class2 from './class2/A01028415/App'
import Class3 from './class3/A01028415/App'
import Class4 from './class4/A01784045/App'
import Class5 from './class5/A01784465/App'
import Class6 from './class6/A01784238/App'
import Class7 from './class7/A01028415/App'
import Class8 from './class8/A01784238_A01784045/App'

function HomePage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        <Link to="/menu">
          Emiliano Romero López A01028415
        </Link>
      </p>
    </>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<ClassesMenu />} />
        <Route path="/menu/class1/*" element={<Class1 />} />
        <Route path="/menu/class2/*" element={<Class2 />} />
        <Route path="/menu/class3/*" element={<Class3 />} />
        <Route path="/menu/class4/*" element={<Class4 />} />
        <Route path="/menu/class5/*" element={<Class5 />} />
        <Route path="/menu/class6/*" element={<Class6 />} />
        <Route path="/menu/class7/*" element={<Class7 />} />
        <Route path="/menu/class8/*" element={<Class8 />} />
      </Routes>
    </Router>
  )
}

export default App