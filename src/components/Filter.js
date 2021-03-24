import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select value={this.props.sort} onChange={this.props.sortProducts}>
            <option value="">Latest</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option value="">All</option>
            <option value="newborn">Newborn</option>
            <option value="baby">Baby</option>
            <option value="toddler">Toddler</option>
            <option value="child">Child</option>
            <option value="teen">Teen</option>
            <option value="adult">Adult</option>
          </select>
        </div>
      </div>
    );
  }
}
