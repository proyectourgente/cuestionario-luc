import "./App.css";
import Polis from "./Polis";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

function App() {
  const [userUuid, setUserUuid] = useState(undefined);
  const [statusOk, setStatusOk] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (localStorage.polisUserXID) {
      console.log("Existing polisUserXID found:", localStorage.polisUserXID);
    } else {
      var userXID = uuidv4();
      console.log("Assigning new polisUserXID:", userXID);
      localStorage.polisUserXID = userXID;
    }
    setUserUuid(localStorage.polisUserXID);
    window.addEventListener(
      "message",
      function (event) {
        if (!event.origin.match(/luc.uy$/)) {
          return;
        }
        if (event.data.name === "init") {
          setStatusOk(event.data.status);
          setTitle(event.data.conversation.topic);
          setDescription(event.data.conversation.description);
          setCreated(event.data.conversation.created);
          setId(event.data.conversation.conversation_id);
        }
        console.log(event.data);
      },
      false
    );
  }, []);

  return (
    <div className="App">
      <header></header>
      <div>
        <Polis uuid={userUuid} />
      </div>
    </div>
  );
}

export default App;
