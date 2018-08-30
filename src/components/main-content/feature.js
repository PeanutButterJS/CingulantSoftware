import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../common/icon';
import Text from '../common/text';

const StyledFeature = styled.li`
  padding: 4em 4em 2em 6em;
  display: block;
  position: relative;
  text-align: left;
  width: 50%;
  text-decoration: none;
  border-bottom: none;
  box-sizing: border-box;
  color: ${props => props.theme.veryLightBlue};
  ${props =>
    props.child === 1 &&
    css`
      border-top-left-radius: 3px;
      background-color: rgba(0, 0, 0, 0.035);
      @media screen and (max-width: 736px) {
        border-top: 0;
      }
    `};
  ${props =>
    props.child === 2 &&
    css`
      border-top-right-radius: 3px;
      background-color: rgba(0, 0, 0, 0.07);
    `};
  ${props =>
    props.child === 3 &&
    css`
      background-color: rgba(0, 0, 0, 0.105);
    `};
  ${props =>
    props.child === 4 &&
    css`
      background-color: rgba(0, 0, 0, 0.14);
    `};
  ${props =>
    props.child === 5 &&
    css`
      border-bottom-left-radius: 3px;
      background-color: rgba(0, 0, 0, 0.175);
    `};
  ${props =>
    props.child === 6 &&
    css`
      border-bottom-right-radius: 3px;
      background-color: rgba(0, 0, 0, 0.21);
    `};
  @media screen and (max-width: 980px) {
    padding: 3em 2em 1em 2em;
    text-align: center;
  }
  @media screen and (max-width: 736px) {
    padding: 3em 0 1em 0;
    background-color: transparent !important;
    border-top: solid 2px #fff;
    width: 100%;
    border-top-color: rgba(255, 255, 255, 0.125);
  }
`;

const FetaureIcon = styled(Icon)`
  :before {
    font-size: 1.5em;
    display: block;
    color: ${props => props.theme.blueGreen};
    position: absolute;
    left: 1.75em;
    top: 2.75em;
    @media screen and (max-width: 980px) {
      left: 0;
      margin: 0 0 1em 0;
      position: relative;
      top: 0;
    }
  }
`;

const Title = styled.h3`
  color: ${props => props.theme.white};
  font-size: 1.15em;
  line-height: 1.75em;
  font-weight: 800;
  letter-spacing: 0.225em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  @media screen and (max-width: 736px) {
    font-size: 1em;
    line-height: 1.65em;
  }
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.veryLightBlue};
  font-family: 'OpenSans';
`;

export const Feature = ({ child, icon, children, title }) => (
  <StyledFeature child={child}>
    <FetaureIcon icon={icon} />
    <Title>{title}</Title>
    <StyledText>{children}</StyledText>
  </StyledFeature>
);

Feature.propTypes = {
  child: PropTypes.number,
  icon: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string
};

export default Feature;
