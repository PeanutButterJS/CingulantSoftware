import styled from 'styled-components';
import PropTypes from 'prop-types';

const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.odd ? 'row-reverse' : 'row')};
  text-align: ${props => (props.odd ? 'right' : 'left')};
  padding: 3em 0 1em 0;
  margin: 0 auto;
  width: 55em;
  box-sizing: border-box;
  @media screen and (max-width: 980px) {
    padding: 3em 3em 1em 3em;
    width: 100%;
  }
  @media screen and (max-width: 736px) {
    align-items: flex-start;
    padding: 2em 2em 0.1em 2em;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const ImageWrapper = styled.span`
  border-radius: 100%;
  margin: ${props => (props.odd ? '0 0 2em 3em' : '0 3em 2em 0')};
  width: 22em;
  overflow: hidden;
  transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  color: ${props => props.theme.white};
  text-decoration: none;
  border: 0;
  display: inline-block;
  position: relative;
  @media screen and (max-width: 980px) {
    margin: 0 2em 2em 0;
    width: 30em;
  }
  @media screen and (max-width: 736px) {
    width: 19em;
    margin: ${props => (props.odd ? '0 0 2em 1.75em' : '0 1.75em 2em 0')};
  }
  @media screen and (max-width: 480px) {
    margin: ${props => (props.odd ? '0 0 2em 2em' : ' 0 0 1em 0 !important')};
    max-width: 85%;
    width: 12em;
  }
`;

const Content = styled.div`
  width: 100%;
`;

const Image = styled.img`
  border-radius: 100%;
  width: 100%;
  display: block;
`;

const Major = styled.h2`
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

const Text = styled.p`
  margin: 0 0 2em 0;
  color: ${props => props.theme.white};
  font-family: 'OpenSansLight';
  line-height: 1.67;
  font-size: 0.9em;
`;

const StyledSlantedContent = styled.section`
  background-color: ${props => props.theme.darkBlue};
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
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.darkBlue},
      0 1px 0 0 ${props => props.theme.darkBlue};
    left: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: '';
    display: block;
    height: 6.5em;
    position: absolute;
    width: 100%;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%2302577a%3B' /%3E%3C/svg%3E");
    @media screen and (max-width: 980px) {
      height: 4.75em;
    }
    @media screen and (max-width: 736px) {
      height: 2.5em;
    }
  }

  &:before {
    top: -6.5em;
    @media screen and (max-width: 980px) {
      top: -4.75em;
    }
    @media screen and (max-width: 736px) {
      top: -2.5em;
    }
  }

  &:after {
    transform: scaleY(-1);
    bottom: -6.5em;
    @media screen and (max-width: 980px) {
      bottom: -4.75em;
      left: 0;
    }
    @media screen and (max-width: 736px) {
      bottom: -2.5em;
      left: 0;
    }
  }
`;

export const SlantedContent = ({ odd, image, title, children }) => (
  <StyledSlantedContent>
    <Inner odd={odd}>
      <ImageWrapper odd={odd}>
        <Image src={image} alt="" />
      </ImageWrapper>
      <Content>
        <Major>{title}</Major>
        <Text>{children}</Text>
      </Content>
    </Inner>
  </StyledSlantedContent>
);

SlantedContent.propTypes = {
  odd: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

export default SlantedContent;
