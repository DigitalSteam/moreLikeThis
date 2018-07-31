import React from 'react';

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const price = (!JSON.stringify(this.props.likeThis.price).match(/[.]/gi)) ? JSON.stringify(this.props.likeThis.price) + '.99' : this.props.likeThis.price;

    return (
      <div className="game_info">
        <img src={"https://s3-us-west-1.amazonaws.com/steam-more-like-this/images/game" + this.props.img + ".jpg"} />
        <h4>{this.props.likeThis.name}</h4>
        <div className="final_price">${price}</div>
      </div>
    );
  }
}
