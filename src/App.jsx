import "./App.css";
import "../sassStyles/_global.scss";
import Routing from "./routes/Routing";

// ====== 06 - february - 2024 ========= //
import Nav from "./components/Nav/nav";
import Hero from "./components/Hero/hero";
// ========== by Bright ================ //

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Routing />
    </>
  );
}

export default App;
