// feature 1
import React, { Component } from 'react';
import data from "./data.json";
import Products from "./components/Products";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render() {
  return (
        <div className="grid-container">
          <header>
            <a href="/">Fat Betty Knits</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Products products={this.state.products}/>
              </div>
              <div className="sidebar">
                Cart Items
              </div>
            </div>
          </main>
          <footer>
            All rights reserved.
          </footer>
        </div>
  );
  }
}

export default App;
