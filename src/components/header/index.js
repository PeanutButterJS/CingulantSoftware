import styled from 'styled-components';
import $ from 'jquery';
import Logo from '../logo';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: ${props => props.theme.veryDarkBlue};
  opacity: 0;
  z-index: 2;
  display: flex;
  padding: 0.3rem 0.5rem 0;
  align-items: center;
  justify-content: space-between;
  transition: opacity 0.2s ease-in-out;
  @media (max-width: 700px) {
    height: 40px;
  }

  &.showScroll {
    opacity: 1;
  }
`;

export const Header = () => {
  $(window).scroll(() => {
    const st = $(window).scrollTop();

    if (st > document.getElementById('content').offsetTop) {
      // Scroll Down
      $('header')
        .removeClass('hideScroll')
        .addClass('showScroll');
    } else {
      $('header')
        .removeClass('showScroll')
        .addClass('hideScroll');
    }
  });

  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};

export default Header;
