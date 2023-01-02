import React, {createContext, useState } from "react";
import Footer from './components/Footer';
import Inquiry from './components/Inquiry';
import Projects from './components/Projects';
import Section from './components/Section';
import About from './components/About';
import ToggleMode from './components/ToggleMode';
import './App.css';
import Language from "./components/Language";

export const themeContext = createContext();

  function App(props) {
    const initialTheme = "dark";
    const [theme, setTheme] = useState(initialTheme);

    const toggleTheme = () => {
      setTheme( theme => (theme === "dark" ? "light" : "dark") );
    }
  const projects = [
    {
      id: '12345',
      title: "Live Coding Workshop",
      heading:"Career Booster Workshop For A Front-End Web Developer",
      details:"Level up your skills by joining live coding workshop for Front-end developer.",
      url:"https://www.htmlhints.com/workshop",
      bg:"workshop-bg-1",
      position:"ms-auto",
      textColor:"text-dark",
    },
    {
      id: '12346',
      title: "Grab My knowledge",
      heading:"HTML HINTS - A Web-Dev Platform",
      details:"Starting from my last semester project now Html Hints having 100K+ community of developers from all over the social media platform. Specially on Instagram by having 70K+ Support of developers, Html Hints is one of the best page on Instagram for Web development knowledge running under my guidance.",
      url:"https://www.htmlhints.com/",
      bg:"workshop-bg-2",
      position:"me-auto",
      textColor:"text-white",
    },
  ];
  const bgStyle = {
      'backgroundColor':theme==='dark'?'#222':'white'
  }
  return (
    <>
        <themeContext.Provider value={{ theme, toggleTheme }}>
          <div style={bgStyle}>
              <ToggleMode/>
              <Section />
              <About />
              <Projects project={projects}/>
              <Language/>
              <Inquiry />
              <Footer />
          </div>
        </themeContext.Provider>
    </>
  );
}
export default App;