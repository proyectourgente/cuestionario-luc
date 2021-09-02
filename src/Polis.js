import { useEffect, useState } from "react";
import loadPolis from "./loadPolis";

const Polis = ({ uuid }) => {
  const [loaded, setLoaded] = useState(false);
  const [iframeReady, setIframeReady] = useState(false);

  const urlLoader = "https://cuestionario.luc.uy/embed.js";
  const conversationId = "3cc5bz2bfc";
  //const urlLoader = "https://pol.is/embed.js";
  //const conversationId = "4dfnw4r9th";

  useEffect(() => {
    loadPolis(urlLoader, () => {
      setLoaded(true);
    });
  });

  useEffect(() => {
    const iframe = document.getElementById("polis_".concat(conversationId));
    if (iframe) {
      console.log("if iframe true");
      const iWindow = iframe.contentWindow;
      const iDocument = iWindow.document;

      // accessing the element
      const headingA = iDocument.getElementsByClassName("HeadingA")[0];
      console.log(headingA);
      headingA.style.display = "none";
      setIframeReady(true);
    }
  }, [loaded]);

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
