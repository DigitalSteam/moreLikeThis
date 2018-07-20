import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      likeThis: [{}, {}, {}],
      isScrolling: false,
      xPos: 0,
    });
  }

  render() {
    const handleStyle = {
      position: 'absolute',
      left: `${this.state.xPos}px`,
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
          <div className="recommended_block_content" id="recommended_block_content">
            Map Function for Games Goes Here
          </div>
        </div>
        <div className="slider_comp autoslider">
          <div className="slider_left">
          </div>
          <div className="slider_right">
            <span />
          </div>
          <div className="slider">
            <div className="handle" style={handleStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
