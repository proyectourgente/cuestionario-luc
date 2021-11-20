import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-4DEQV5CNQT");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
    </div>
  );
}

export default App;
