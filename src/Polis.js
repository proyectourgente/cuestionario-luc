import { useEffect, useState } from "react";
import loadPolis from "./loadPolis";


const Polis = ({ uuid }) => {

  const [loaded, setLoaded] = useState(false);

  const urlLoader = process.env.REACT_APP_LOADER_URL;
  const conversationId = process.env.REACT_APP_CONVERSATION_ID;
  //const urlLoader = "https://pol.is/embed.js";
  //const conversationId = "4dfnw4r9th";

  useEffect(() => {
    loadPolis(urlLoader, () => {
      setLoaded(true);
    });
  }, []);

  

  return (
    <div>
      <div
        id="polisDiv"
        className="polis"
        data-conversation_id={conversationId}
        data-xid={uuid}
      ></div>
    </div>
  );
};

export default Polis;
