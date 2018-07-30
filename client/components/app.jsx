import React from 'react';
import ReactDOM from 'react-dom';
import GameInfo from './gameInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      likeThis: [],
      isScrolling: false,
      xPos: 0,
      currentGenre: 1,
    });
    this.getRelevant(this.state.currentGenre);
    this.mouseDown = this.mouseDown.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
  }

  getRelevant(genreId) {
    fetch(`/api/games/:${genreId}/more-games`)
      .then(response => response.json())
      .then((info) => {
        this.setState({
          likeThis: info,
        });
      })
      .catch((error) => {
        console.log('Error getting relevant titles', error);
      });
  }

  mouseDown() {
    this.setState({
      isScrolling: true,
    });
  }

  mouseUp() {
    this.setState({
      isScrolling: false,
    });
  }

  handleScroll(e) {
    if (this.state.isScrolling && ((this.state.xPos >= 0 && e.screenX < 753 && e.screenX > 40) || (this.state.xPos <= 670 && e.screenX > 85))) {
      this.setState({
        xPos: e.screenX - 75,
      });
    }
  }

  render() {
    const handleStyle = {
      position: 'absolute',
      left: `${this.state.xPos}px`,
    };

    const blockStyle = {
      'overflowX': 'scroll',
    };

    return (
      <div className="block" id="recommended_block" onMouseMove={this.handleScroll} onMouseUp={this.mouseUp}>
        <div className="block_header">
          <div className="right">
            <a href="#">
              See All
            </a>
          </div>
          <h4>
            More Like This
          </h4>
        </div>
        <div className="store_horizontal_games">
          <div id="recommended_block_content" style={blockStyle}>
            {this.state.likeThis.map((elem) => {
              return <GameInfo likeThis={elem} />;
            })}
          </div>
        </div>
        <div className="slider_comp autoslider">
          <div className="slider_left" />
          <div className="slider_right" />
          <div className="slider">
            <div className="handle" style={handleStyle} onMouseDown={this.mouseDown} onMouseMove={this.handleScroll} onMouseUp={this.mouseUp} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
