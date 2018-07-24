import React from 'react';
import ReactDOM from 'react-dom';
import GameInfo from './gameInfo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      likeThis: [{}, {}, {}, {}, {}],
      isScrolling: false,
      xPos: 0,
    });
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
      <div className="block" id="recommended_block">
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
              return <GameInfo />;
            })}
          </div>
        </div>
        <div className="slider_comp autoslider">
          <div className="slider_left" />
          <div className="slider_right" />
          <div className="slider">
            <div className="handle" style={handleStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
