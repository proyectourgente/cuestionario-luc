import { useEffect, useState } from "react";

const Polis = ({urlLoader, pageId, siteId, site}) => {
  const [loaded, setLoaded] = useState(false);
  console.log(urlLoader, pageId, siteId, site);

  

  useEffect(() => {
    const script = document.createElement("script");
    script.src = urlLoader;
    script.async = true;
    document.body.appendChild(script);
    setLoaded(true);
    return () => {
      document.body.removeChild(script);
      setLoaded(false);
    };
  },[]);

  return (
    <div>
      {!loaded && <div>Loading...</div>}
      {loaded && (
        <div
          id="polisDiv"
          data-page_id={pageId}
          data-site_id={siteId}
          data-parent_url={site}
          className={"polis"}
          data-border={0}
        ></div>
      )}
    </div>
  );
};

export default Polis;
