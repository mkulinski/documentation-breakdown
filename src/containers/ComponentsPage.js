import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/componentActions';

import Heading from '../components/Heading';
import Subheading from '../components/Subheading';
import Example from '../components/Example';


import '../styles/components-page.scss';


class ComponentsPage extends Component {
  render() {
    const currentComponent = this.props.routeParams.component;
    const currentState = this.props.state[currentComponent];
    return (
      <div className="component-container">
        <Heading value={currentState.heading} />
        <Subheading value={currentState.subheading} />
        <Example tableValues={currentState.example} />
        <div style={{ marginTop: 100 }}>{'<Best Practices Component />'}</div>
        <div>{'<GuideLines Component />'}</div>
      </div>
    );
  }
}

ComponentsPage.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
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
