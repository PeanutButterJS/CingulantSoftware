import styled from 'styled-components';
import image from '../../assets/images/background.png';

export const PageContent = styled.div`
  margin-bottom: 390px;
  background: url(${image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);

  &:after {
    content: '';
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: -25px;
    left: 50%;
    margin-left: -25px;
    background: #fff;
    transform: rotate(45deg);
  }
`;

export default PageContent;
