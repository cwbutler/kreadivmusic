import React, { Component, PropTypes } from 'react';
import linksMessages from '../../common/app/linksMessages';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MdUser from 'react-icons/lib/md/account-circle';
import IconButton from 'material-ui/IconButton';

const style = {
  width: '64px',
  height: '64px'
};
const inactiveColor = '#777eff';


class Header extends Component {

  static propTypes = {
    viewer: PropTypes.object,
  };

  render() {
    const { viewer } = this.props;

    return (
      <header id="header">
        <IconButton tooltip="User Account" style={style} >
          <MdUser size={35} color="#f5f5f5" />
        </IconButton>
      </header>
    );
  }

}

export default connect(state => ({
  viewer: state.users.viewer,
}))(Header);
