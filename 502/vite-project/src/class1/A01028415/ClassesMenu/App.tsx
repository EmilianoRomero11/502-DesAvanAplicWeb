// src/class1/A01028415/ClassesMenu/App.tsx
import { Link } from 'react-router-dom'
import "./App.css";

function ClassesMenu() {
  const classLinks = [
    { title: "Class 1", route: "/menu/class1" },
    { title: "Class 2", route: "/menu/class2" },
    { title: "Class 3", route: "/menu/class3" },
    { title: "Class 4", route: "/menu/class4" },
    { title: "Class 5", route: "/menu/class5" },
    { title: "Class 6", route: "/menu/class6" },
    { title: "Class 7", route: "/menu/class7" },
    { title: "Class 8", route: "/menu/class8" },
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
        {classLinks.map(({ title, route }) => (
          <Link
            key={title}
            to={route}
            className="card-link"
            style={{ textDecoration: 'none' }}
          >
            <div className="card">
              <h2>{title}</h2>
              <p>Go to {title.toLowerCase()}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default ClassesMenu;