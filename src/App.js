import "./App.css";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <AnimatedRoutes />
      </main>
    </div>
  );
}

export default App;
