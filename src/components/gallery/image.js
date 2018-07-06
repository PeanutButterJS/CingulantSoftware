import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';

export const Image = ({ className, text }) => (
  <Zoom>
    <div className={className}>
      <div className="image" />
      <div className="overlay" />
      <div className="text">{text}</div>
    </div>
  </Zoom>
);

Image.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
};

export default styled(Image)`
  box-shadow: 3px 3px 9px 0px  ${props => props.theme.grey};
  border-radius:5px;
  flex-grow: 1; 
  font-size: 2.5vw;
  font-family: 'Champagne';
  width:30%;
  height: 400px;
  max-height: 400px;
  overflow: hidden;
  position: relative;
  margin: 1rem;
  transition: all .5s ease;
 
  @media (max-width: 1400px) {
      height: 300px;
      font-size: 4vw;
  }

   @media (max-width: 1200px) {
      height: 200px;
  }
  @media(max-width: 700px) {
    margin: .5rem 0;
    font-size: 8vw;
  }
  @media(max-width:500px) {
    width:90%;
    
  }

  &:hover .overlay {
    opacity: 0.7;
  }

  &:hover .text {
    opacity: 1;
  }

  &:hover .image {
    transform: scale(1.3);
  }

  .image {
    background: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    transition: all 5s ease;
  }

  .overlay {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.blue}
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .text {
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    color: ${props => props.theme.white}
    transform: translate(-50%, -50%);
  }
`;
