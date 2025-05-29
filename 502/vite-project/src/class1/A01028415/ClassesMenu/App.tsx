// src/class1/A01028415/ClassesMenu/App.tsx
import { Link } from 'react-router-dom'
import "./App.css";

function ClassesMenu() {
  const classLinks = [
    { title: "Class 1", href: "/src/class1/A01028415/index.html" },
    { title: "Class 2", href: "/src/class2/A01028415/index.html" },
    { title: "Class 3", href: "/src/class3/A01028415/index.html" },
    { title: "Class 4", href: "/src/class4/A01784045/index.html" },
    { title: "Class 5", href: "/src/class5/A01784465/index.html" },
    { title: "Class 6", href: "/src/class6/A01784238/index.html" },
    { title: "Class 7", href: "/src/class7/A01028415/index.html" },
    { title: "Class 8", href: "/src/class8/A01784238_A01784045/index.html" },
  ];

  return (
    <>
      <nav style={{ marginBottom: '20px' }}>
        <Link 
          to="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#646cff', 
            fontSize: '16px',
            fontWeight: '500'
          }}
        >
          ← Back to Home
        </Link>
      </nav>
      
      <h1>
        Classes Menu Emiliano Romero, José Manuel Zumaya, Isaac Shakalo, Felipe
        de Araujo
      </h1>
      <div className="card-container">
        {classLinks.map(({ title, href }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <div className="card">
              <h2>{title}</h2>
              <p>Go to {title.toLowerCase()} index page</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default ClassesMenu;