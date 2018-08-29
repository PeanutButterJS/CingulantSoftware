import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../common/icon';

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

export const Feature = ({ child, icon }) => (
  <StyledFeature child={child}>
    <Icon icon={icon} />
    hey hey
  </StyledFeature>
);

Feature.propTypes = {
  child: PropTypes.number,
  icon: PropTypes.string
};

export default Feature;
