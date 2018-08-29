import styled from 'styled-components';

export const Text = styled.p`
  margin: 0 0 2em 0;
  color: ${props => props.color || props.theme.white};
  font-family: 'OpenSansLight';
  line-height: 1.67;
  font-size: 0.9em;
`;

export default Text;
