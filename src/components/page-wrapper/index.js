import styled from 'styled-components';
import image from '../../assets/images/background.png';

export const PageWrapper = styled.div`
  font-family: 'OpenSans';
  background-color: #2e3141;
  background-image: linear-gradient(
      to top,
      rgba(46, 49, 65, 0.3),
      rgba(46, 49, 65, 0.4)
    ),
    url(${image});
  background-size: auto, cover;
  background-attachment: fixed, fixed;
  background-position: center, center;
  height: 100vh;
`;

export default PageWrapper;
