import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './components/reducers';
import './styles/App.css';

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter> 
          {routes}
        </HashRouter>  
      </Provider>   
    );
  }
}

export default App;
