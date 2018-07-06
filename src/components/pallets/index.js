import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Zoom } from 'react-reveal';
import image from '../../assets/images/pallets.jpeg';

export const Pallets = ({ className }) => (
  <div className={className}>
    <Zoom>
      <div className="imageWrapper">
        <div className="image" />
        <div className="overlay" />
        <div className="text">The Pallet Option</div>
      </div>
    </Zoom>
    <p className="p">
      Our flagship program, the Pallet Option is perfect for any budget. We can
      create anything from cup holders to benches to decks at a fraction of the
      cost and without losing any qaulity. We use recycled wooden pallets made
      of genuin oak and rusty nails. So if your looks to save the enviorment and
      get a good splinter or two this option is for you.
    </p>
  </div>
);

Pallets.propTypes = {
  className: PropTypes.string
};

export default styled(Pallets)`
  padding: 50px 100px;
  height: 100vh;
  transition: all 0.5s ease;
  @media (max-width: 1024px) {
    padding: 0 0 50px 0;
  }
.p {
  font-size: 2.5rem;
  font-family: "Georgia";
}

.imageWrapper {
  float:left;
  shape-outside:ellipse();
  font-size: 2.5vw;
  font-family: 'Champagne';
  width:30%;
  border-radius: 50%;
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
}


  .image {
    background: url(${image});
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
