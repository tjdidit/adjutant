import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import './styles.css';
function App() {
  return (
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/tasks">tasks</Link></li>
          </ul>
        </nav>
      </header>
      <main>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/" element={<NotFound />} />
      </Routes>
    </main>
    <footer>
      stupid optical studios c) 2024 / adjutant pre-alpha
    </footer>
    </Router>
  );
}

export default App;
