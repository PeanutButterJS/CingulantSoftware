import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Image = ({ className, image }) => (
  <div className={className}>
    <img className="image" src={image} alt="" />
  </div>
);

Image.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string
};

export default styled(Image)`
  width: 30%;
  flex-basis: 30%;
  @media (max-width: 700px) {
    display: none;
  }
  .image {
    width: 100%;
  }
`;
