import React from 'react';
import { OverlayTrigger, Popover } from 'react-bootstrap';

export default class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }

  render() {
    const price = (!JSON.stringify(this.props.likeThis.price).match(/[.]/gi)) ? JSON.stringify(this.props.likeThis.price) + '.99' : this.props.likeThis.price;

    const genreArray = ['Action', 'Casual', 'Early Access', 'Indie', 'MMO', 'Racing', 'Sports', 'Strategy'];
    const currentGenres = ['RPG'];
    for (var i = 0; i <= 3; i++) {
      const index = Math.floor(Math.random() * genreArray.length);
      currentGenres.push(genreArray[index]);
    }
    const random = Math.floor(Math.random() * 100);
    const generalReviews = Number(this.props.likeThis.average_review.split('')[0]);
    var consensus = '';
    var colorClass = '';
    if (generalReviews <= 10 && generalReviews >= 8) {
      consensus = 'Very Positive';
      colorClass = 'positive';
    } else if (generalReviews < 8 && generalReviews >= 6) {
      consensus = 'Positive';
      colorClass = 'positive';
    } else if (generalReviews < 6 && generalReviews >= 4) {
      consensus = 'Mixed';
      colorClass = 'mixed';
    } else {
      consensus = 'Negative';
      colorClass = 'negative';
    }

    const popoverHover = (
      <Popover id="popover-trigger-hover">
        <div className="gameName">{this.props.likeThis.name}</div>
        <div className="releaseDate">Release Date: {this.props.likeThis.release_date}</div>
        <img src={"https://steamcdn-a.akamaihd.net/steam/apps/435150/ss_b59e5889726cab2cf01a93d0c0d192d25928952a.600x338.jpg?t=1526471534"} />
        <div className="userReviews">
          Overall User Reviews:
          <div className={"reviewScore " + colorClass}>
            {consensus + " (" + random + " reviews)"}
          </div>
        </div>
        <div>User Tags:</div>
        <div className="userTags">
          {currentGenres.map((genre) => {
            return <div className="currentGenre">{genre}</div>;
          })}
        </div>
      </Popover>
    );

    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return (
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="right"
        overlay={popoverHover}
      >
        <div className="game_info">
          <img src={"https://s3-us-west-1.amazonaws.com/steam-more-like-this/images/game" + this.props.img + ".jpg"} />
          <h4>{this.props.likeThis.name}</h4>
          <div className="final_price">${price}</div>
        </div>
      </OverlayTrigger>
    );
  }
}
