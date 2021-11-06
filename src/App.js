import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import useGaTracker from "./useGATracker";

function App() {
  useGaTracker();

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Main />
    </div>
  );
}

export default App;
