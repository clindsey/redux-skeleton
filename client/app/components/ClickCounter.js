import React from 'react';

class ClickCounter extends React.Component {
  _onClick () {
    this.props.counterIncrement();
  }

  render () {
    return (
      <div>
        <button
            className="btn btn-primary"
            onClick={this._onClick.bind(this)}
            type="button"
        >{'click me'}</button>
        <h3>{this.props.count}</h3>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  count: React.PropTypes.number.isRequired,
  counterIncrement: React.PropTypes.func.isRequired
};

export default ClickCounter;
