import "./App.css";
import Polis from "./Polis";
import useGaTracker from "./useGATracker";

function App() {
  const polisEmbedUrl = process.env.REACT_APP_LOADER_URL;
  const polisPageId = process.env.REACT_APP_POLIS_PAGE_ID;
  const polisSiteId = process.env.REACT_APP_POLIS_SITE;
  const site = process.env.REACT_APP_SITE;

  useGaTracker();

  return (
    <div className="App">
      <Polis
        urlLoader={polisEmbedUrl}
        pageId={polisPageId}
        siteId={polisSiteId}
        site={site}
      />
    </div>
  );
}

export default App;
