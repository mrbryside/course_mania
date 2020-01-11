/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import LoginContainer from 'containers/LoginContainer/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TestVideo from 'containers/TestVideo/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  background-color: #f3f3f5;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  overflow-y: auto;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet titleTemplate="%s - Courses">
        {/* <meta name="description" content="A React.js Boilerplate application" /> */}
      </Helmet>
      {/* <Header /> */}
      <Switch>
        <Route exact path="/" component={TestVideo} />
        <Route path="/video" component={LoginContainer} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      {/* <Footer /> */}
      <GlobalStyle />
    </AppWrapper>
  );
}
