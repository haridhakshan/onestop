import { Route,BrowserRouter as Router, Switch } from "react-router-dom";
import Login from "./login/Login";
import Register from "./login/Register";
import Home from "./dashboard/Home";
import Fetchjournles from "./dashboard/journels/Fetchjournles";
import Addjournel from "./dashboard/journels/Addjournel";
import View from "./dashboard/journels/View";
import Ideafetch from "./dashboard/startups/Ideafetch";
import Addideas from "./dashboard/startups/Addideas";
import Viewideas from "./dashboard/startups/Viewideas";
import Start from "./dashboard/startups/Start";
import Feedback from "./dashboard/Feedback/Feedback";
import Collab from "./dashboard/startups/Collab";
import Todo from "./dashboard/startups/Todo";
import Investor from "./dashboard/startups/Investor";
import Chatbox from "./dashboard/startups/Chatbox";



function App() {
  return (
      <div>
        <Router>
          <Switch>
         <Route exact path="/">
         <Login/>
         </Route>
         <Route path="/register">
         <Register/>
         </Route>
         <Route path="/home">
         <Home/>
         </Route>
         <Route path="/start">
        <Start/>
        </Route>
         <Route path="/ideas">
         <Ideafetch/>
         </Route>
         <Route path="/addideas">
        <Addideas/>
        </Route>
        
        <Route path="/journel">
        <Fetchjournles/>
        </Route>
        <Route path="/addjournel">
        <Addjournel/>
        </Route>
        <Route path="/way/:id">
        <Viewideas/>
        </Route>
        <Route path="/path/:id">
        <View/>
        </Route>
        <Route path="/feed">
        <Feedback/>
        </Route>
        <Route path="/collab">
        <Collab/>
        </Route>
        <Route path="/progress">
        <Todo/>
        </Route>
        <Route path="/invest">
        <Investor/>
        </Route>
        <Route path="/chat">
        <Chatbox/>
        </Route>
        </Switch>
        </Router>
        
        
        
      </div>
  );
}

export default App;
