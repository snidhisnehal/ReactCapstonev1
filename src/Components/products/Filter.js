import React, { Component } from 'react'

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      sort: "",
    };
  }

  render() {
   
    return (
      <>
        <select value={this.props.data} onChange={sortProducts} >
          <option>Sort by Latest</option>
          <option value="Lowest">low to high</option>
          
        </select>
      </>
    )
  }
}
