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
    this.leftButtonClick = this.leftButtonClick.bind(this);
    this.rightButtonClick = this.rightButtonClick.bind(this);
  }

  getRelevant(genreId) {
    fetch(`http://127.0.0.1:3004/api/games/:${genreId}/more-games`)
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
    const obj = document.getElementById('recommended_block_content');
    const totalLength = (obj.childElementCount - 4) * 202;
    const start = ((window.innerWidth - 815) / 2) + 76;
    const end = window.innerWidth - ((window.innerWidth - 815) / 2) - 76;
    if (this.state.isScrolling && ((this.state.xPos > 0 && e.screenX < end) || (this.state.xPos <= 676 && e.screenX > start))) {
      const percent = (this.state.xPos / 670);
      obj.scrollLeft = totalLength * percent;
      this.setState({
        xPos: e.screenX - start,
      });
    }
  }

  leftButtonClick() {
    const obj = document.getElementById('recommended_block_content');
    const totalLength = (obj.childElementCount - 4) * 202;
    obj.scrollLeft -= 202;
    const percent = obj.scrollLeft / totalLength;
    this.setState({
      xPos: 670 * percent,
    });
  }

  rightButtonClick() {
    const obj = document.getElementById('recommended_block_content');
    const totalLength = (obj.childElementCount - 4) * 202;
    obj.scrollLeft += 202;
    const percent = obj.scrollLeft / totalLength;
    this.setState({
      xPos: 675 * percent,
    });
  }

  render() {
    const handleStyle = {
      position: 'absolute',
      left: `${this.state.xPos}px`,
    };

    const blockStyle = {
      overflowX: 'hidden',
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
            {this.state.likeThis.map((elem, index) => {
              return <GameInfo likeThis={elem} img={index + 1} />;
            })}
          </div>
        </div>
        <div className="slider_comp autoslider">
          <div className="slider_left" onClick={this.leftButtonClick} />
          <div className="slider_right" onClick={this.rightButtonClick} />
          <div className="slider">
            <div className="handle" style={handleStyle} onMouseDown={this.mouseDown} onMouseMove={this.handleScroll} onMouseUp={this.mouseUp} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
