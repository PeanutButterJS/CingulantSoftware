import styled from 'styled-components';
import image from '../../assets/images/background.png';

export const PageContent = styled.div`
  background: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: relative;
`;

export default PageContent;
