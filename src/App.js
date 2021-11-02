import "./App.css";
import Footer from "./Footer";
import Main from "./Main";
import useGaTracker from "./useGATracker";

function App() {
  useGaTracker();

  return (
    <div className="flex flex-col min-h-screen">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
