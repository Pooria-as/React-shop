import React from "react"
import { Route, Switch } from "react-router";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";


class App extends React.Component {
  render() 
  { 
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>    
        </Switch>
      </div>
    );
  }
}


 
export default App;