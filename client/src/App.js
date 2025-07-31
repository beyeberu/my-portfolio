import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import About from './components/About'; // or './pages/About' if that's where it is
import Contact from './components/Contact';
import Projects from './components/Projects';
import './styles/main.scss';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Add a toggle function
  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;