/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import WebcamCapture from '../../components/WebcamCapture/WebcamCapture.js';
import s from './Home.css';

class Home extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div>
            <WebcamCapture />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
