import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBox = styled.div`
  color: ${props => props.theme.darkBlue};
  width: 200px;
  background-color: ${props => props.theme.white};
  height: 200px;
  padding: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${props => `4px solid ${props.theme.teal}`};

  @media screen and (max-width: 980px) {
    margin-bottom: 15px;
    height: 175px;
    width: 175px;
  }
`;

export const Box = ({ children }) => <StyledBox>{children}</StyledBox>;

Box.propTypes = {
  children: PropTypes.node
};

export default Box;
