import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import MdUser from 'react-icons/lib/md/account-circle';
import MdHome from 'react-icons/lib/md/home'

const iconSize = 35;
const inactiveColor = '#777eff';

const style = {
  width: '64px',
  height: '64px'
};

const Menu = () => (
  <div id="app-menu">
    <div id="dynamic-tools">
      <IconButton style={style} tooltip="Home">
        <MdHome size={iconSize} color={inactiveColor} />
      </IconButton>
    </div>

    <div id="static-tools">
      <IconButton style={style} tooltip="User Account">
        <MdUser size={iconSize} color={inactiveColor} />
      </IconButton>
    </div>
  </div>
);

export default connect()(Menu);
