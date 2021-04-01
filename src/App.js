import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Store from "./screens/Store";
import AdminScreen from "./screens/AdminScreen";
import OurStory from "./components/OurStory";
import Contact from "./components/Contact";

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/home" onMouseOver="this.style.cursor='pointer'">Fat Betty Knits</Link>
              <Link to="/our-story">Our Story</Link>
              <Link to="/store">Store</Link>
              <Link to="/admin" hidden>Admin</Link>
              <Link to="/blogs">Blogs</Link>
            </header>


            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route exact path="/our-story" component={OurStory} />
              <Route exact path="contact-us" component={Contact} />
              <Route path="/store" component={Store} exact />
              <Route path="/home" component={Home} />
            </main>
            <footer>All rights reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
