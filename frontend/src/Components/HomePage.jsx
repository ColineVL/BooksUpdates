import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: false,
      players: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/players/list')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ players: responseJson.data, list: true });
      });
  }

  render() {
    return (
      <div className="container">
        {this.state.list ? (
          <div className="list-group">
            {this.state.players.map((player) => (
              <li
                className="list-group-item list-group-item-action"
              >
                {player.name}
              </li>
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}
