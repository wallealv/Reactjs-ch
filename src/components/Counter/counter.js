import React, { Component }from 'react';


class Contador extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    render() {
      return (
        <div>
          <p>Clicks {this.state.count}</p>
          <button onClick={() => this.setState({ count: this.state.count + 1 })}>
            +
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            -
          </button>
        </div>
      );
    }
  }

export default Contador