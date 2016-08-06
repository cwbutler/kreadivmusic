import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import MdUser from 'react-icons/lib/md/account-circle';
import MdHome from 'react-icons/lib/md/home'

const iconSize = 35;
const inactiveColor = '#777eff';

const Menu = () => (
  <div id="app-menu">
    <div id="dynamic-tools">
      <MdHome size={iconSize} color={inactiveColor} />
    </div>

    <div id="static-tools">
      <MdUser size={iconSize} color={inactiveColor} />
    </div>
  </div>
);

export default connect()(Menu);
