
import Home from "./components/pages/Home/home";
import Login from "./components/pages/Login/login";
import Register from "./components/pages/Register/register";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Collection from "./components/pages/Collection/collection";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const {user} = useContext(Context)

  

  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/"> <Home/> </Route>
        <Route path="/register"> {user ? <Home user={user}/> : <Register/>} </Route>
        <Route path="/login"> {user ? <Home/> : <Login/>} </Route>
        <Route path="/collection"> {user ? <Collection username = {user.username}/> : <Login/>} </Route>


      </Switch>
    </Router>
  );

}

export default App;
