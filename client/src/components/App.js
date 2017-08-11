import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          searchValue: "",
      }

      this.updateSearchValue = this.updateSearchValue.bind(this)
  }

  updateSearchValue(e) {
      this.setState({
          searchValue: e.target.value
      })
  }

  _handleSearchClick() {
      console.log("Searching...")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Movie Search</h1>
            <form>
              <input type="text" onChange={this.updateSearchValue} placeholder="Enter Movie Here" />
              <button id="search" className="btn btn-primary" onClick={this._handleSearchClick()}>Search</button>
              <button>Clear</button>
            </form>
        </div>
        <p className="App-intro">
          <div className="AppBody">
              <h2>Movies</h2>
              <h2>My Movies</h2>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
