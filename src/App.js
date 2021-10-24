import DashBoard from "./screens/DashBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
     <Switch>
       <Route path="/">
         <DashBoard/>
       </Route>
     </Switch>
    </Router>
  )
}

export default App;
