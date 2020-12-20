import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header/Header';
import { PageBackground } from '../Page.styles';

const Main = () => {
  return (
    <Background>
      <Header />
    </Background>
  );
};

export default Main;

// css

const Background = styled(PageBackground)``;
