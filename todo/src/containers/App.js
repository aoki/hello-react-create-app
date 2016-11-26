import React from 'react';
import Home from '../components/Home';

import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore';

const store = configureStore();

export default React.createClass({
  render() {
    return (
      <div>
        <Provider store={store}>
          <Home />
        </Provider>
      </div>
    );
  }
});
