import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {
  render () {
    const name = this.props.name || 'World';
    return (
      <h1>{`Hello, ${name}!`}</h1>
    );
  }
}

function mapStateToProps (state, ownProps) {
  const {name} = ownProps.params;
  return {
    name
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
