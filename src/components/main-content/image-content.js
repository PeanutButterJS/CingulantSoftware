import styled from 'styled-components';
import PropTypes from 'prop-types';
import SlantedContent from '../common/slanted-content';
import Title from '../common/title';
import Text from '../common/text';

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
    margin: ${props => (props.odd ? '0 0 2em 2em' : '0 2em 2em 0')};
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

export const ImageContent = ({ odd, image, title, children, color }) => (
  <SlantedContent odd={odd} color={color}>
    <Inner odd={odd}>
      <ImageWrapper odd={odd}>
        <Image src={image} alt="" />
      </ImageWrapper>
      <Content>
        <Title>{title}</Title>
        <Text>{children}</Text>
      </Content>
    </Inner>
  </SlantedContent>
);

ImageContent.propTypes = {
  odd: PropTypes.bool,
  color: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node
};

export default ImageContent;
