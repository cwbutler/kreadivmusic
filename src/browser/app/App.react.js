import './App.scss';
import Footer from './Footer.react';
import Header from './Header.react';
import Menu from './Menu.react';
import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import favicon from '../../common/app/favicon';
import start from '../../common/app/start';
import { connect } from 'react-redux';
import { locationShape } from 'react-router';

// v4-alpha.getbootstrap.com/getting-started/introduction/#starter-template
const bootstrap4Metas = [
  { charset: 'utf-8' },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
  {
    'http-equiv': 'x-ua-compatible',
    content: 'ie=edge',
  },
];

class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    currentLocale: PropTypes.string.isRequired,
    location: locationShape,
  };

  render() {
    const { children, currentLocale, location } = this.props;

    return (
      <div id="main" className="container">
        <Helmet
          htmlAttributes={{ lang: currentLocale }}
          titleTemplate="%s - KreadivMusic"
          meta={[
            ...bootstrap4Metas,
            {
              name: 'description',
              content: 'KreadivMusic description',
            },
            ...favicon.meta,
          ]}
          link={[
            ...favicon.link,
          ]}
        />

        {/* Pass location to ensure header active links are updated. */}
        <Header location={location} />

        <div id="content-wrap">
          <Menu />
          {children}
        </div>
        
        <Footer />
      </div>
    );
  }

}

App = start(App);

export default connect(state => ({
  currentLocale: state.intl.currentLocale,
}))(App);
