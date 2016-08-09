import React from 'react';
import ReactDOM from 'react-dom';
import configureReporting from '../common/configureReporting';
import configureStore from '../common/configureStore';
import createRoutes from './createRoutes';
import createStorageEngine from 'redux-storage-engine-localstorage';
import { Provider } from 'react-redux';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router';
import { fromJSON } from '../common/transit';
import theme from '../common/theme';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { useScroll } from 'react-router-scroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const initialState = fromJSON(window.__INITIAL_STATE__);
const reportingMiddleware = configureReporting({
  appVersion: initialState.config.appVersion,
  sentryUrl: initialState.config.sentryUrl,
  unhandledRejection: fn => window.addEventListener('unhandledrejection', fn),
});
const store = configureStore({
  initialState,
  platformDeps: { createStorageEngine },
  platformMiddleware: [reportingMiddleware, routerMiddleware(browserHistory)],
});
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store.getState);
const muiTheme = getMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store}>
      <Router
        history={history}
        render={applyRouterMiddleware(useScroll())}
      >
        {routes}
      </Router>
    </Provider>
  </MuiThemeProvider>
  , document.getElementById('app')
);
