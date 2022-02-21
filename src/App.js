import DashBoard from "./screens/DashBoard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from "./screens/PostDetails";
import ImageResize from "./screens/ImageResize";
import AdmitCardView from './screens/AdmitCardView'
import ResultView from './screens/ResultView'
import ResumeMaker from "./screens/ResumeMaker";
import Edit from "./screens/Edit";
import Builder from "./screens/Builder";


function App() {
  return (
    <Router>
     <Switch>
       <Route  path="/" exact component={DashBoard}/>
       <Route  path="/image-resizer" exact component={ImageResize}/>
       <Route  path="/post/:postId" component={PostDetails}/>
       <Route  path="/post-admitcard/:postId" component={AdmitCardView}/>
       <Route  path="/post-result/:postId" component={ResultView}/>
       <Route  path="/resumemaker" component={ResumeMaker}/>
       <Route  path="/edit" component={Edit}/>
       <Route  path="/resume" component={Builder}/>
     </Switch>
    </Router>
  )
}

export default App;
