import React from "react"
import { Route, Switch } from "react-router";
import HomePage from "./pages/Home/HomePage";


class App extends React.Component {
  render() { 
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={Hat}/>    
        </Switch>
      </div>
    );
  }
}


const Hat = () =>
(
  <div>
    <h1>
      hat
    </h1>
  </div>
)


 
export default App;