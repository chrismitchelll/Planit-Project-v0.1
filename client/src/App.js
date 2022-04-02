import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main/Main";
import About from "./pages/About/About";
import Budget from "./pages/Budget/Budget";
import Tools from "./pages/Tools/Tools";
import Profile from "./pages/Profile/Profile";
import Plan from "./pages/Plan/Plan";
// import Login from "./components/Login/Login";
import Landing from "./pages/Landing/Landing";
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
