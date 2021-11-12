import './App.css';
// import Sidebar from './components/Sidebar';
import { BrowserRouter , Route, Switch} from 'react-router-dom';
import Headers from './components/Header';
import Notice from './components/Notice';
import Login from './components/Login';
import Profile from './components/Profile';
import Attendance from './components/Attendance';
import Complain from './components/Complain';
import Leave from './components/Leave';

function App() {
  return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/notice">
              <Headers/>
              <Notice/>
            </Route>
            <Route path="/leave">
              <Headers/>
              <Leave/>
            </Route>
            <Route path="/complain">
              <Headers/>
              <Complain/>
            </Route>
            <Route path="/attendance">
              <Headers/>
              <Attendance/>
            </Route>
            <Route path="/home">
              <Headers/>
            </Route>
            <Route path="/profile">
              <Headers/>
              <Profile/>
            </Route>
            <Route path="/">
              <Login/>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
