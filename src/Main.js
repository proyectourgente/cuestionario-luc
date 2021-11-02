import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Who from "./Who";

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/quienes" component={Who}></Route>
    </Switch>
  );
}

export default Main;
