import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/topicActions';


import '../styles/components-page.scss';


class ComponentsPage extends Component {
  render() {
    const currentComponent = this.props.routeParams.component;
    const currentState = this.props.state[currentComponent];
    console.log(currentState);
    return (
      <div className="component-container">
        <h1>pageHeading</h1>
        <div>Subheading</div>
        <div>Example</div>
        <div>Best Practices</div>
        <div>GuideLines</div>
      </div>
    );
  }
}

ComponentsPage.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    state: state.components,
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
)(ComponentsPage);
