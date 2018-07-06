import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Text = ({ className, text, title }) => (
  <div className={className}>
    <h1 className="title">{title.toUpperCase()}</h1>
    <p className="text">{text}</p>
  </div>
);

Text.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};

export default styled(Text)`
  width: 70%;
  flex-basis: 70%;
  padding-left: 100px;
  transition: all 0.5s ease;
  @media (max-width: 700px) {
    width: 100%;
    flex-basis: 100%;
    padding: 20px 25px 20px;
  }
  .title {
    font-family: 'SourceSansPro';
    font-size: 27px;
    letter-spacing: 6.075px;
    margin-bottom: 50px;
  }
  .text {
    transition: all 0.5s ease;
    max-width: 900px;
    font-size: 20px;
    line-height: 33px;
    letter-spacing: 1.5px;
    @media (max-width: 700px) {
      font-size: 4vw;
    }
  }
`;
