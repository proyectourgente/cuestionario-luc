import { useEffect, useState } from "react";
import loadPolis from "./loadPolis";

const Polis = ({ uuid }) => {
  const [loaded, setLoaded] = useState(false);
  const urlLoader = "https://cuestionario.luc.uy/embed.js";
  const conversationId = "3cc5bz2bfc";
  //const urlLoader = "https://pol.is/embed.js";
  //const conversationId = "4dfnw4r9th";

  useEffect(() => {
    loadPolis(urlLoader, () => {
      setLoaded(true);
    });
  });

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
