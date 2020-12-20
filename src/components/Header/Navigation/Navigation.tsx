import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { stylesSet } from 'constants/StylesSet';
import { HrefPath } from 'types/Paths.types';

const Navigation = () => {
  const aggregatePath = () => {
    const slashIndex = window.location.pathname.indexOf('/', 1);
    const pathHead =
      slashIndex > -1
        ? window.location.pathname.slice(0, slashIndex)
        : window.location.pathname;

    switch (pathHead) {
      case HrefPath.base.main:
        return (
          <>
            <StyledLink to={HrefPath.base.ma}>Академия Магии</StyledLink>
            <StyledLink to={HrefPath.base.ea}>ЕА</StyledLink>
          </>
        );

      case HrefPath.base.ma:
        return (
          <>
            <StyledLink to={HrefPath.ma.spells}>Заклинания</StyledLink>
          </>
        );

      case HrefPath.base.ea:
        return (
          <>
            <StyledLink to={HrefPath.ea.mechanics}>Механики</StyledLink>
          </>
        );

      default:
        return <></>;
    }
  };

  return (
    <StyledNav>
      <StyledLink to={HrefPath.base.main}>Главная</StyledLink>
      {aggregatePath()}
    </StyledNav>
  );
};

export default Navigation;

// css

const StyledNav = styled.nav`
  width: 100%;
`;

const StyledLink = styled(Link)`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  vertical-align: middle;

  :first-child {
    font-size: 1.25rem;
    color: ${stylesSet.color.main};
  }

  :nth-child(n + 2) {
    margin-left: 20px;
  }
`;
