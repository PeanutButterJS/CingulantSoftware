import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../common/icon';

const StyledBox = styled.div`
  color: ${props => props.theme.darkBlue};
  width: 150px;
  background-color: ${props => props.theme.white};
  height: 60px;
  padding: 5px;
  position: relative;
  box-sizing: content-box;
  text-transform: uppercase;
  cursor: pointer;
  border: ${props => (props.chosen ? `2px solid ${props.theme.teal}` : 'none')};
  border-bottom: ${props => `4px solid ${props.theme.teal}`};
  :hover {
    box-shadow: 1px 1px 1px 0px rgba(250, 250, 250, 0.9);
  }
  @media screen and (max-width: 1680px) {
    height: 50px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 15px;
  }
  @media screen and (max-width: 736px) {
    width: 100%;
  }
`;
const BoxIcon = styled(Icon)`
  :before {
    font-size: 1em;
    display: block;
    color: ${props => props.theme.teal};
    position: absolute;
    left: 10px;
    top: 30px;
    @media screen and (max-width: 1680px) {
      top: 25px;
    }
  }
`;

const Title = styled.h5`
  font-size: 0.7em;
  text-align: left;
`;

const Inner = styled.div`
  margin-left: 35px;
`;

export const Box = ({ title, icon, onClick, chosen }) => (
  <StyledBox onClick={() => onClick()} chosen={chosen}>
    <Inner>
      <BoxIcon icon={icon} />
      <Title>{title}</Title>
    </Inner>
  </StyledBox>
);

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  chosen: PropTypes.bool
};

export default Box;
