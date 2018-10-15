import styled from 'styled-components';
import $ from 'jquery';
import Logo from './logo';

const StyledHeader = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.05);
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
    background-color: rgba(53, 64, 78, 0.9); 
    /* rgba(1, 48, 63, 0.9);  ${props => props.theme.veryDarkBlue}; */
  }
`;

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
    $(window).scroll(() => {
      const st = $(window).scrollTop();

      if (st > 20) {
        // Scroll Down
        this.setState({ scrolled: true });
        $('header')
          .removeClass('hideScroll')
          .addClass('showScroll');
      } else {
        this.setState({ scrolled: false });
        $('header')
          .removeClass('showScroll')
          .addClass('hideScroll');
      }
    });
  }

  render() {
    return (
      <StyledHeader>
        <Logo dark={!this.state.scrolled} />
      </StyledHeader>
    );
  }
}

export default Header;
