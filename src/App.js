import "./App.scss"
import "./components/layoutStyles/layout.scss"
import Home from "./components/Home/index"
import About from "./components/About/index"
import Contact from "./components/Contact/index"
import Projects from "./components/Projects/index"
import Sidebar from "./components/Sidebar/index"
import Startscreen from "./components/Startscreen/index"
import CVButton from "./components/CVButton/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/start" element={<Startscreen />} />
        </Routes>
        <CVButton />
      </Router>
    </>
  )
}

export default App
