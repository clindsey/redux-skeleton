import React from 'react';

class ClickCounter extends React.Component {
  static propTypes = {
    count: React.PropTypes.number.isRequired,
    counterIncrement: React.PropTypes.func.isRequired
  };

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
        <h3 className="click-counter__count">{this.props.count}</h3>
      </div>
    );
  }
}

export default ClickCounter;
