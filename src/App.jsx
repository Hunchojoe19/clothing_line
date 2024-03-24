import Headers from "./components/Headers";
import Bestsellers from "./pages/Bestsellers";
import Current from "./pages/Current";
import Hero from "./pages/Hero";

function App() {
  return (
    <>
      <Headers />
      <Hero />
      <Current />
      <Bestsellers />
    </>
  );
}

export default App;
