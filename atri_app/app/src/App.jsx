import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/Services" element={<Services />} />
<Route path="/projects" element={<Projects />} />
<Route path="/blog" element={<Blog />} />
<Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
