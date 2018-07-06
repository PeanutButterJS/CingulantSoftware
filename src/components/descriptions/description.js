import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Fade } from 'react-reveal';
import Text from './text';
import Image from './image';

export const Description = ({ className, title, text, image, even }) => (
  <Fade right={even} left={!even}>
    <div className={className}>
      {even && <Text title={title} text={text} />}

      <Image image={image} />

      {!even && <Text title={title} text={text} />}
    </div>
  </Fade>
);

Description.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  even: PropTypes.bool
};

export default styled(Description)`
  display: flex;
  align-items: center;
  background-color: ${props =>
    props.even ? props.theme.mediumBlue : props.theme.blue};
  color: ${props => props.theme.white};
`;
