import React from 'react';
import {connect} from 'react-redux';

export class App extends React.Component {
  render () {
    return (
      <div
          className="container"
      >
        <div className="row">
          <div className="col-sm-12">
            {this.props.children}
            <hr />
            <footer>
              <p>{'© 2016'}</p>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps () {
  return {
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
