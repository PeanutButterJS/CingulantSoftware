import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../../common/icon';

const StyledBox = styled.div`
  color: ${props => props.theme.darkBlue};
  width: 150px;
  background-color: ${props => props.theme.white};
  height: 60px;
  padding: 5px;
  border-radius: 5px;
  position: relative;
  box-sizing: content-box;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: ${props => `4px solid ${props.theme.teal}`};
  :hover {
    box-shadow: 1px 1px 1px 0px rgba(250, 250, 250, 0.9);
  }
  :after {
    border-top: ${props => `25px solid ${props.theme.teal}`};
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    bottom: -27px;
    content: ${props => (props.chosen ? '""' : 'initial')};
    position: absolute;
    left: 45%;
    margin-left: -17px;
    width: 0;
    height: 0;

    @media screen and (max-width: 980px) and (min-width: 736px) {
      border-top: ${props => `20px solid ${props.theme.teal}`};
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      bottom: -30px;
      transform: rotate(-90deg);
      right: -33px;
      top: 19px;
      left: initial;
    }

    @media screen and (max-width: 736px) {
      border-top: ${props => `10px solid ${props.theme.teal}`};
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      bottom: -13px;
      left: 60%;
    }
  }
  @media screen and (max-width: 1680px) {
    height: 50px;
  }
  @media screen and (max-width: 980px) {
    margin-bottom: 15px;
    width: 130px;
  }
  @media screen and (max-width: 980px) and (min-width: 736px) {
    border-right: ${props => `4px solid ${props.theme.teal}`};
    border-bottom: none;
  }
  @media screen and (max-width: 736px) {
    width: 50px;
  }
`;

const BoxIcon = styled(Icon)`
  :before {
    font-size: 1em;
    display: block;
    color: ${props => props.theme.teal};
    position: absolute;
    left: 10px;
    top: 10px;
    @media screen and (max-width: 1680px) {
      top: 25px;
    }
    @media screen and (max-width: 736px) {
      left: 21px;
    }
  }
`;

const Title = styled.h5`
  font-size: 0.6em;
  text-align: center;
  position: relative;
  top: 6px;

  @media screen and (max-width: 980px) {
    font-size: 0.65em;
  }
  @media screen and (max-width: 736px) {
    display: none;
  }
`;

export const Box = ({ title, icon, onClick, chosen }) => (
  <StyledBox onClick={() => onClick()} chosen={chosen}>
    <BoxIcon title={title} icon={icon} />
    <Title>{title}</Title>
  </StyledBox>
);

Box.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  chosen: PropTypes.bool
};

export default Box;
