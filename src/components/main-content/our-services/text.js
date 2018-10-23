import styled from 'styled-components';
import PropTypes from 'prop-types';

const TextContainer = styled.div`
  width: 75%;
  padding: 5px 0;
  margin: auto;
  margin-top: 30px;
  text-align: left;
  line-height: 1.4em;
  color: ${props => props.theme.white};
  height: auto;
  border-left: ${props => `4px solid ${props.theme.teal}`};

  @media screen and (max-width: 736px) {
    margin-top: 5px;
  }
`;

const Paragraph = styled.div`
  text-indent: 50px;
  margin-bottom: 10px;
  margin-left: 30px;
  @media screen and (max-width: 980px) {
    text-indent: 25px;
  }
`;

const Title = styled.div`
  color: ${props => props.theme.white};
  opacity: 0.4;
  margin-bottom: 15px;
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
`;

export const Text = ({ text, title }) => {
  if (text && text.length > 0) {
    return (
      <TextContainer>
        <Title>{title}</Title>
        {text.map(t => <Paragraph>{t}</Paragraph>)}
      </TextContainer>
    );
  }
  return null;
};

Text.propTypes = {
  text: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string
};

export default Text;
