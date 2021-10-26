
import './App.css';
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import ViewEmployeeComponent from './Components/ViewComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateEmployeeCompo from './Components/CreateEmployeeCompo';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
       <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeCompo}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>


             {/* <Route
              path="/Registration"
              component={Registration}
            ></Route> */}
          </Switch>
        </div>
        <div style={{textAlign:"center"}}>
           <FooterComponent />
           </div>
      </Router>
    </div>
  );
}

export default App;
