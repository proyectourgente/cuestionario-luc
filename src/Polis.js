import { useEffect, useState } from "react";

const Polis = ({}) => {
  const [loaded, setLoaded] = useState(false);

  const urlLoader = process.env.REACT_APP_LOADER_URL;
  const conversationId = process.env.REACT_APP_CONVERSATION_ID;

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
          data-page_id="luc"
          data-site_id="polis_site_id_Bo4TQ5RdT85PRGv0e1"
          data-parent_url="https://test.luc.com.uy/"
          className={"polis"}
          data-border={0}
        ></div>
      )}
    </div>
  );
};

export default Polis;
