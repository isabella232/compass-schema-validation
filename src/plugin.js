import React, { Component } from 'react';
import { Provider } from 'react-redux';
import CompassJsonSchemaValidation from 'components/compass-schema-validation';
import store from 'stores';

/**
 * CompassJsonSchemaValidationPlugin plugin.
 */
class Plugin extends Component {
  static displayName = 'CompassJsonSchemaValidationPlugin';

  /**
   * Connect the Plugin to the store and render.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <Provider store={store}>
        <CompassJsonSchemaValidation />
      </Provider>
    );
  }
}

export default Plugin;
