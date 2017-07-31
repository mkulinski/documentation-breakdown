import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/articleActions';

import '../styles/home-page.scss';


class HomePage extends Component {

  render() {
    return (
      <div className="component-container contents-container">
        <h1>Engage-UI</h1>
        <p>This is the home or root page for the engage-ui docs</p>
        <p>Just some text about how amazing the engage-ui library truely is</p>
      </div>
    );
  }
}

HomePage.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
