import React from 'react';
import styled from 'styled-components';
import { stylesSet } from '../../constants/StylesSet';
import Navigation from './Navigation/Navigation';

const Header = () => {
  return (
    <Background>
      <Navigation />
    </Background>
  );
};

export default Header;

// css

const Background = styled.div`
  padding: 10px 20px 10px;

  background: ${stylesSet.color.headerBackground};
`;
