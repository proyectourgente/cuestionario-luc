import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
