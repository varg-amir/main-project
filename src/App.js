import Home from "./pages/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Categories from "./pages/Categories/Categories";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            < Home />
          </Route>
          <Route exact path="/categories">
            < Categories />
          </Route>
          <Route exact path="/singleproduct">
            < SingleProduct />
          </Route>
          <Route exact path="/shoppingcart">
            < ShoppingCart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
