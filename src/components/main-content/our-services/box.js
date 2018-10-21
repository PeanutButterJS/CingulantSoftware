import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../common/icon';

const StyledBox = styled.div`
  color: ${props => props.theme.darkBlue};
  width: 200px;
  background-color: ${props => props.theme.white};
  height: 200px;
  padding: 5px;
  position: relative;
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
const BoxIcon = styled(Icon)`
  :before {
    font-size: 1.5em;
    display: block;
    color: ${props => props.theme.teal};
    position: absolute;
    left: 1.75em;
    top: 2.75em;
  }
`;

export const Box = ({ title, icon }) => (
  <StyledBox>
    <BoxIcon icon={icon} />
    <span>{title}</span>
  </StyledBox>
);

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string
};

export default Box;
