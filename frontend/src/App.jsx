import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Class from "./components/pages/Class.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import Contact from "./components/pages/Contact.jsx";

import ClassSchedule from "./components/classschedule/ClassSchedule.jsx";
import ClassTimings from "./components/classschedule/ClassTimings";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class />} />
        <Route path="/schedule" element={<ClassSchedule />} />
        <Route path="/schedule/timings" element={<ClassTimings />} />

        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
