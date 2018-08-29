import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const SlantedContent = styled.section`
  background-color: ${props => props.color};
  margin: 6.5em 0;
  position: relative;
  @media screen and (max-width: 980px) {
    margin: 4.75em 0;
  }
  @media screen and (max-width: 736px) {
    margin: 2.5em 0;
  }

  &:before,
  &:after {
    box-shadow: inset 0 -1px 0 0 ${props => props.color},
      0 1px 0 0 ${props => props.color};
    left: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: '';
    display: block;
    height: 6.5em;
    position: absolute;
    width: 100%;
    ${props =>
    props.color === props.theme.darkBlue &&
      css`
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2302577a%3B' /%3E%3C/svg%3E");
      `};
    ${props =>
    props.color === props.theme.veryDarkBlue &&
      css`
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2301303f%3B' /%3E%3C/svg%3E");
      `};
    ${props =>
    props.color === props.theme.mediumBlue &&
      css`
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%23296484%3B' /%3E%3C/svg%3E");
      `};
    ${props =>
    props.color === props.theme.blue &&
      css`
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232e9cca%3B' /%3E%3C/svg%3E");
      `};

    @media screen and (max-width: 980px) {
      height: 4.75em;
    }
    @media screen and (max-width: 736px) {
      height: 2.5em;
    }
  }

  &:before {
    top: -6.5em;
    transform: ${props => (!props.odd ? 'scaleX(-1)' : '')};
    @media screen and (max-width: 980px) {
      top: -4.75em;
    }
    @media screen and (max-width: 736px) {
      top: -2.5em;
    }
  }
  &:after {
    transform: ${p => (p.odd ? 'scaleY(-1)' : 'scaleY(-1) scaleX(-1)')};
    bottom: -6.5em;
    @media screen and (max-width: 980px) {
      bottom: -4.75em;
    }
    @media screen and (max-width: 736px) {
      bottom: -2.5em;
    }
  }
`;

SlantedContent.propTypes = {
  odd: PropTypes.bool,
  color: PropTypes.string
};

export default SlantedContent;
