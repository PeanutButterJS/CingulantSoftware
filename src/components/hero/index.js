import Styled from 'styled-components';
import PropTypes from 'prop-types';
import img from '../../assets/images/hero-image.png';

export const Hero = ({ className }) => (
  <div className={className}>
    <img className="img" src={img} alt="" />
    <div className="overlay" />
    <div className="overlayText">
      <div> Whatever good things we</div>
      <span className="buildText">build</span>
      <div>end up building us</div>
    </div>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string
};

export default Styled(Hero)`
    color: white;
    position: relative;
    background: white;

    .img {
      max-height:100vh;
      width: 100%;
    }

    .overlay {
      position: absolute;
      top: -5px;
      left: 0;
      width:100%;
      height:100%;
      background-color: black;
      opacity: .3;
    }

    .overlayText {
      width:50%;
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'BebasNeueRegular';
      font-size: 5vw;
      margin: auto;
    }

    .buildText {
      font-size: 11vw;
    }

`;
