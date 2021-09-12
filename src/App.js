import React from "react"
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SingInSignUp from "./pages/SignIn-SignUp/SignIn-SingUp";


class App extends React.Component {
  render() 
  { 
    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>    
          <Route path='/signIn' component={SingInSignUp}/>    
        </Switch>
      </div>
    );
  }
}


 
export default App;