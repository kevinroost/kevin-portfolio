import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About/About';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import NavBar from './Components/NavBar/NavBar';
import ProjectDetails from './pages/ProjectDetails';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects/:projectTitle' element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
