import React from 'react';
import Paper from 'material-ui/Paper';
import { Flex, reflex } from 'reflexbox';

import Header from './header';
import Nav from './nav';
import Routes from './rotues';
import Footer from './footer';

const ReflexPaper = reflex(Paper);

export default () => (
  <Flex column auto>
    <Header />
    {/* <Nav /> */}
    <ReflexPaper flex auto>
      <Routes />
    </ReflexPaper>
    <Footer />
  </Flex>
);