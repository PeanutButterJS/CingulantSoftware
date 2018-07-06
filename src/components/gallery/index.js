import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from './image';
import image1 from '../../assets/images/pergola1.jpg';
import image2 from '../../assets/images/pergola2.jpg';
import image3 from '../../assets/images/pergola3.jpg';
import image4 from '../../assets/images/swing1.jpg';
import image5 from '../../assets/images/swingset1.jpg';
import image6 from '../../assets/images/bench1.jpg';

export const Gallery = ({ className }) => (
  <div className={className}>
    <Image image={image1} text="Picturesque" />
    <Image image={image2} text="Poetic" />
    <Image image={image3} text="Pristine" />
    <div className="title">Gallery</div>
    <Image image={image4} text="Peaceful" />
    <Image image={image5} text="Playful" />
    <Image image={image6} text="Precise" />
  </div>
);

Gallery.propTypes = {
  className: PropTypes.string
};

export default styled(Gallery)`
  width: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  background: ${props => props.theme.white};
  box-sizing: border-box;
  align-content: space-between;
  transition: all 0.5s ease;
  @media (max-width: 1024px) {
    padding: 0;
  }

  .title {
    width: 100%;
    margin: 15px;
    padding: 40px;
    text-align: center;
    font-size: 3rem;
    font-family: 'Champagne';
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.brown};
    box-shadow: 2px 2px 11px 0px ${props => props.theme.brown};
  }
`;
