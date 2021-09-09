import "./App.css";
import Polis from "./Polis";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import Question from "./Question";
import Header from "./Header";

function App() {
  const [userUuid, setUserUuid] = useState(undefined);
  const [statusOk, setStatusOk] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");
  const [id, setId] = useState("");
  const [answer, setAnswer] = useState(localStorage.polisUserAnswer);

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
      },
      false
    );
  }, []);

  useEffect(() => {
    if (answer) {
      console.log("Assigning new polisUserAnswer:", answer);
      localStorage.polisUserAnswer = answer;
    }
    
  }, [answer]);

  return (
    <div className="App">
      <Header/>
      <div>
        {(answer === undefined) && <Question setAnswer={setAnswer}/>}
        <Polis uuid={userUuid} visible={answer !== undefined} />
      </div>
    </div>
  );
}

export default App;
