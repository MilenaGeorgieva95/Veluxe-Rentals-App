import "./App.css";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
}

export default App;
