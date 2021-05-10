import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/search">
                    <h1>This is search</h1>

                    {/*    Search page (the results page) */}
                </Route>

                <Route path="/">
                    <Home />
                    {/*    Home page (the one with the search on) */}
                </Route>
            </Switch>

        </Router>
    </div>
  );
}

export default App;
