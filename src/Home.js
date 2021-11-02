import "./App.css";
import Polis from "./Polis";

function Home() {
  const polisEmbedUrl = process.env.REACT_APP_LOADER_URL;
  const polisPageId = process.env.REACT_APP_POLIS_PAGE_ID;
  const polisSiteId = process.env.REACT_APP_POLIS_SITE;
  const site = process.env.REACT_APP_SITE;

  return (
    <Polis
      urlLoader={polisEmbedUrl}
      pageId={polisPageId}
      siteId={polisSiteId}
      site={site}
    />
  );
}

export default Home;
