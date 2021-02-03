import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import data from './data/data'
import { CSSTransition } from "react-transition-group";

class App extends Component {

  state = {
    property: data.properties,
    indexElement: 0
  }

  nextProperty = () => {
    let currentIndex = this.state.indexElement + 1 === this.state.property.length
      ? 0
      : this.state.indexElement + 1

    this.setState({
      indexElement: currentIndex
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.nextProperty()}>Next</button>

        <CSSTransition
          in={true}
          appear={true}
          timeout={1000}
          classNames="fade"
        >
          <Home
            index={this.state.indexElement}
            property={this.state.property[this.state.indexElement]}
          />
        </CSSTransition>
      </div>
    );
  }
}

export default App;
