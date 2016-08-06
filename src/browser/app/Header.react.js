import React, { Component, PropTypes } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {

  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { viewer } = this.props;

    return (
      <header id="header">
      </header>
    );
  }

}

export default connect(state => ({
  viewer: state.users.viewer,
}))(Header);
