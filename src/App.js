// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard, OurAim, OurVision } from "./pages/Dashboard";
import {
  CreateUser,
  ServicesOne,
  ServicesTwo,
  ServicesThree,
} from "./pages/CreateUser";
import { ViewTask, Todo, Ongoing , Completed } from "./pages/ViewTask";
import CreateTask from "./pages/CreateTask";
import CreateRole from "./pages/CreateRole";
// import TitleBar from "./components/TitleBar";
import Box from '@mui/material/Box';


function App() {
  return (
    <Box>
    
    {/* <TitleBar></TitleBar> */}
    
    <Router>
      <Sidebar/>
      <Switch>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/about-us/aim" exact component={OurAim} />
        <Route path="/about-us/vision" exact component={OurVision} />
        <Route path="/CreateUser" exact component={CreateUser} />
        <Route path="/services/services1" exact component={ServicesOne} />
        <Route path="/services/services2" exact component={ServicesTwo} />
        <Route path="/services/services3" exact component={ServicesThree} />
        <Route path="/CreateTask" exact component={CreateTask} />
        <Route path="/ViewTask" exact component={ViewTask} />
        <Route path="/Todo/Todo1" exact component={Todo} />
        <Route path="/Ongoing/Ongoing2" exact component={Ongoing} />
        <Route path="/Completed/Completed3" exact component={Completed} />
        <Route path="/CreateRole" exact component={CreateRole} />
      </Switch>
    </Router>
    </Box>
  );
}
  
export default App;