import styled from 'styled-components';
import image from '../../assets/images/skyline-district-3302126.jpg';

export const PageWrapper = styled.div`
  background-color: rgba(0,73,111,0.6);
  background-image: linear-gradient(
      to top,
      rgba(0,73,111,0.6),
      rgba(0,73,111,0.6)
    ),
    url(${image});
  background-size: auto, cover;
  background-attachment: fixed, fixed;
  background-position: center, center;
  height: 100%;
`;

export default PageWrapper;
