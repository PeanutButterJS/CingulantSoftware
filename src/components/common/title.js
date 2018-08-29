import styled from 'styled-components';

export const Title = styled.h2`
  padding-bottom: 1em;
  border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  font-size: 1.2em;
  color: ${props => props.theme.white};
  letter-spacing: 0.1em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  @media screen and (max-width: 736px) {
    font-size: 1em;
  }
`;

export default Title;
