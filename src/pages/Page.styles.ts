import styled from 'styled-components';
import { stylesSet } from '../constants/StylesSet';

export const PageBackground = styled.div`
  width: 80%;
  max-width: ${stylesSet.size.pageMaxWidth};
  min-height: 100vh;
  margin: 0 auto;

  background: ${stylesSet.color.pageBackground};
`;
