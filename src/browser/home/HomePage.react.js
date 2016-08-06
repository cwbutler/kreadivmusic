import Helmet from 'react-helmet';
import React, { Component } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedHTMLMessage, FormattedMessage, defineMessages } from 'react-intl';

const messages = defineMessages({
  intro: {
    defaultMessage: `
      <p>
        Ahoy, this is the
        <a target="_blank" href="https://github.com/este/este">Este</a> dev stack.
      </p>
    `,
    id: 'home.intro',
  },
});

export default class HomePage extends Component {

  render() {
    return (
      <div className="home-page">
        <FormattedMessage {...linksMessages.home}>
          {message => <Helmet title={message} />}
        </FormattedMessage>
      </div>
    );
  }

}
