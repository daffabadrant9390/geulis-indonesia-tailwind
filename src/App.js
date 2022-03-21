import React, { useEffect } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav.js";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import ProgramsPage from "./pages/ProgramsPage.js";
import FaqPage from "./pages/FaqPage.js";
import RegisterPage from "./pages/RegisterPage.js";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/programs" component={ProgramsPage} exact />
        <Route path="/faq" component={FaqPage} exact />
        <Route path="/register" component={RegisterPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
