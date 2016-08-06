import React, { Component, PropTypes } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import FaBars from 'react-icons/lib/fa/bars';

class Header extends Component {

  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { viewer } = this.props;

    return (
      <header id="header">
        <FaBars size={40} color="black" style={{ cursor: 'pointer' }} />
      </header>
    );
  }

}

export default connect(state => ({
  viewer: state.users.viewer,
}))(Header);
