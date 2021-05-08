//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Link, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

import AddTutorial from "./components/AddTutorial";
import TutorialsList from "./components/TutorialsList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          iantheging
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <h2>React Hooks Firestore example</h2>
        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList}></Route>
          <Route exact path="/add" component={AddTutorial}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
