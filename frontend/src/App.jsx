import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext.jsx";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Class from "./components/pages/Class.jsx";
import Gallery from "./components/pages/Gallery.jsx";
import Contact from "./components/pages/Contact.jsx";

import ClassSchedule from "./components/classschedule/ClassSchedule.jsx";
import ClassTimings from "./components/classschedule/ClassTimings.jsx";

import ReviewPage from "./components/reviewpage/ReviewPage.jsx";
import LoginPage from "./components/loginpage/LoginPage.jsx";

function App() {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header
        loggedInUser={loggedInUser}
        onLogout={() => setLoggedInUser(null)}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/class" element={<Class />} />
        <Route path="/schedule" element={<ClassSchedule />} />
        <Route path="/schedule/timings" element={<ClassTimings />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/login"
          element={
            <LoginPage onLogin={(username) => setLoggedInUser(username)} />
          }
        />
        <Route
          path="/review"
          element={<ReviewPage loggedInUser={loggedInUser} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
