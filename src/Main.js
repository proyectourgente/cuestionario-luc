import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Privacy from "./Privacy";
import What from "./What";
import Who from "./Who";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/quienes" component={Who}></Route>
      <Route exact path="/como" component={What}></Route>
      <Route exact path="/privacidad" component={Privacy}></Route>
    </Switch>
  );
}

export default Main;
