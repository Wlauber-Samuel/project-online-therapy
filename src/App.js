import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Infos from "./pages/Infos";
import Scheduling from "./pages/Scheduling";
import Payment from "./pages/Payment";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/como-funciona" component={ Infos } />
        <Route path="/agendamento" component={ Scheduling } />
        <Route path="/pagamento" component={ Payment } />
      </Switch>
    </Router>
  );
}

export default App;
