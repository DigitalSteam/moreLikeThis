import React from 'react';

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div className="game_info">
        <img src="https://steamcdn-a.akamaihd.net/steam/apps/570/capsule_184x69.jpg?t=1525818062" />
        <h4>{this.props.likeThis.name}</h4>
        <div className="final_price">${this.props.likeThis.price}</div>
      </div>
    );
  }
}
