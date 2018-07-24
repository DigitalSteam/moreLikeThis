import React from 'react';

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="game_info">
        <img src="https://steamcdn-a.akamaihd.net/steam/apps/570/capsule_184x69.jpg?t=1525818062" />
        <h4>Dota 2</h4>
        <div className="final_price">Free to Play</div>
      </div>
    );
  }
}
