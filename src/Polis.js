import { useEffect, useState } from "react";
import loadPolis from "./loadPolis";
import { useAuth0 } from "@auth0/auth0-react";


const Polis = ({ uuid }) => {

  const { user, isAuthenticated, isLoading } = useAuth0();
  const [loaded, setLoaded] = useState(false);

  const urlLoader = "https://cuestionario.luc.uy/embed.js";
  const conversationId = "3cc5bz2bfc";
  //const urlLoader = "https://pol.is/embed.js";
  //const conversationId = "4dfnw4r9th";

  useEffect(() => {
    loadPolis(urlLoader, () => {
      setLoaded(true);
    });
  },[isAuthenticated]);

  

  return (
    <div>
      <div
        id="polisDiv"
        className="polis"
        data-conversation_id={conversationId}
        data-xid={uuid}
        data-x_name={user?.name}
        data-x_profile_image_url={user?.picture}
        data-show_vis={true}
        data-show_share={true}
      ></div>
    </div>
  );
};

export default Polis;
