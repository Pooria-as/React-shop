import React from "react"
import { Route, Switch } from "react-router";
import Header from "./components/Header/Header";
import HomePage from "./pages/Home/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SingInSignUp from "./pages/SignIn-SignUp/SignIn-SingUp";
import { auth } from "./firebase/firebase" 
import Contact from "./pages/Contact/contact";

class App extends React.Component {

  constructor()
  {
    super();
    this.state=
    {
      CurrentUser:null
    }
  }

unSubFormAuth=null;

  componentDidMount()
  {
   this.unSubFormAuth= auth.onAuthStateChanged(user=>{
      this.setState({CurrentUser:user});
    })
  }



  componentWillUnmount()
  {
    return this.unSubFormAuth();
  }

  render() 
  {   

    return (
      <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage}/>    
          <Route path='/signIn' component={SingInSignUp}/>    
          <Route path='/contact' component={Contact}/>    
        </Switch>
      </div>
    );
  }
}


 
export default App;