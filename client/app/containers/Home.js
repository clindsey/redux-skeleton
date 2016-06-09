import React from 'react';
import {connect} from 'react-redux';
import ClickCounter from '../components/ClickCounter';
import {counterIncrement} from '../actions/clickCounter';

class Home extends React.Component {
  render () {
    const name = this.props.name || 'World';
    return (
      <div>
        <h1>{`Hello, ${name}!`}</h1>
        <div>
          <ClickCounter
              count={this.props.clickCounter.count}
              counterIncrement={this.props.counterIncrement}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const {name} = ownProps.params;
  const {clickCounter} = state;
  return {
    name,
    clickCounter
  };
}

const mapDispatchToProps = {
  counterIncrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
