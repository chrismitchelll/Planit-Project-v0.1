import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Budget from "./pages/Budget/Budget";
import Tools from "./pages/Tools/Tools";
import Profile from "./pages/Profile/Profile";
import Plan from "./pages/Plan/Plan";
// import Login from "./components/Login/Login";
import Landing from "./pages/Landing/Landing";
import AddTrip from "./components/Itineary/AddTrip/AddTrip";
import "./styles/styles.scss";

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route
            exact
            path="/welcome"
            render={(routerProps) => <Landing {...routerProps} />}
          />{" "}
        </Switch>
        <Switch>
          <Route
            exact
            path="/"
            render={(routerProps) => <Home {...routerProps} />}
          />{" "}
        </Switch>
        <Switch>
          <Route
            exact
            path="/main"
            render={(routerProps) => <Main {...routerProps} />}
          />{" "}
        </Switch>
        <Switch>
          <Route
            exact
            path="/budget"
            render={(routerProps) => <Budget {...routerProps} />}
          />{" "}
        </Switch>
        <Switch>
          <Route
            exact
            path="/tools"
            render={(routerProps) => <Tools {...routerProps} />}
          />{" "}
        </Switch>
        {/* <Switch>
          <Route
            path="/login"
            render={(routerProps) => <Login {...routerProps} />}
          />{" "}
        </Switch> */}
        <Switch>
          <Route
            path="/plan"
            render={(routerProps) => <Plan {...routerProps} />}
          />{" "}
        </Switch>
        <Route
          path="/trips/add"
          render={(routerProps) => <AddTrip {...routerProps} />}
        />
        <Switch>
          <Route
            exact
            path="/profile"
            render={(routerProps) => <Profile {...routerProps} />}
          />{" "}
        </Switch>
        <Switch>
          <Route
            path="/about"
            render={(routerProps) => <About {...routerProps} />}
          />{" "}
        </Switch>
      </>
    </Router>
  );
}

export default App;
