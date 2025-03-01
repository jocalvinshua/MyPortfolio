import "./App.css";
import Projects from './assets/Projects';
import Navbar from './assets/Navbar';
import Header from './assets/Header';
import AboutMe from './assets/AboutMe';
import Contact from './assets/Contact';
import Footer from './assets/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}