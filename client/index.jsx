import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';

const MoreLikeThis = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<MoreLikeThis />, document.getElementById('MoreLikeThis'));

window.MoreLikeThis = MoreLikeThis;
export default MoreLikeThis;
