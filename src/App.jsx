import Navbar from "./components/Navbar/Navbar";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import MouseGlow from "./components/Common/MouseGlow";
import Home from "./pages/Home";
import "./styles/global.css";

function App() {
  return (
    <>
      <AnimatedBackground />
      <MouseGlow />
      <Navbar />
      <Home />
    </>
  );
}

export default App;