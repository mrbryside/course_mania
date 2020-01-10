/* eslint-disable react/no-unused-prop-types */
/**
 *
 * LoginContainer
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import FlexBox from 'components/FlexBox';
import makeSelectLoginContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

const Wrapper = styled.div`
  height: 100%;
`;

export function LoginContainer() {
  useInjectReducer({ key: 'loginContainer', reducer });
  useInjectSaga({ key: 'loginContainer', saga });

  return (
    <Wrapper>
      <Helmet>
        <title>Login Page</title>
        <meta name="description" content="Description of LoginContainer" />
      </Helmet>
      <FlexBox type="parent" direction="column" justify="center" align="center">
        <button type="button">sadsad</button>
      </FlexBox>
    </Wrapper>
  );
}

LoginContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginContainer: makeSelectLoginContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  reduxForm({
    enableReinitialize: true,
    form: 'LoginContainer',
  }),
  withConnect,
  memo,
)(LoginContainer);
