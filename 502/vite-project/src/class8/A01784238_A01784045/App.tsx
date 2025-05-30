// src/class8/A01784238_A01784045/App.tsx
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import JestPage from "./pages/JestPage";
import CypressPage from "./pages/CypressPage";
import LoginPage from "./pages/LoginPage";
import TravelFormPage from "./pages/TravelFormPage";
import { BrowserRouter } from "react-router-dom";

const Class8 = () => {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Back to Classes Menu navigation */}
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

      <div className="container">
        {/* Internal navigation for testing pages */}
        <nav>
          <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
            <li>
              <Link to="cypress">Cypress Testing</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="jest" element={<JestPage />} />
          <Route path="cypress" element={<CypressPage />} />
          <Route
            path="cypress/login"
            element={
              <LoginPage
                onLogin={(username) => console.log(`Logged in as: ${username}`)}
              />
            }
          />
          <Route path="cypress/travel-form" element={<TravelFormPage />} />
          <Route path="*" element={<JestPage />} /> {/* Catch-all route */}
        </Routes>
      </div>
    </div>
  );
};

const Class8Compoent = () => {
  return (
    <BrowserRouter>
      <Class8 />
    </BrowserRouter>
  );

}
export default Class8Compoent;