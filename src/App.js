import './App.css';
import NavBar from './Components/NavBar/NavBar.js'
import Home from './Home/Home.js';
import SignIn from './Components/SignIn/SignIn.js'
import SignUp from './Components/SignUp/SignUp.js'
import Products from './Components/Products/Products.js'
import Cart from './Components/Cart/Cart'
import { useState, useEffect } from 'react';
import {auth} from './firebase'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged(
      userAuth=>{
        if(userAuth){
          console.log(userAuth)
          const user = {
            uid: userAuth.uid,
            email: userAuth.email
          }
          setUser(user)
        }
        else{
          setUser(null)
        }
      }
    )
    return unsuscribe
  }, [])
  
  return (
    <Router>
    <div className="App">
      <NavBar status={user? true: false}/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/product' component={user?Products:  SignIn}/>
          <Route path='/cart' component={user?Cart:  SignIn}/>
          <Route path='/signIn' component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
