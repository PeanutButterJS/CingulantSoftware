import styled from 'styled-components';
import PropTypes from 'prop-types';
import $ from 'jquery';

export const Header = ({ className }) => {
  let lastScrollTop = 0;

  $(window).scroll(() => {
    const st = $(window).scrollTop();
    if (Math.abs(lastScrollTop - st) <= 5) {
      return false;
    }
    if (st > lastScrollTop && st > 80) {
      // Scroll Down
      $('header')
        .removeClass('nav-down')
        .addClass('nav-up');
    } else if (st + $(window).height() < $(document).height()) {
      $('header')
        .removeClass('nav-up')
        .addClass('nav-down');
    }
    lastScrollTop = st;
  });

  return (
    <header className={className}>
      <span className="siteText">
        <span className="whiteText">Cingulant</span> Software
      </span>
      <span className="callNowText">CALL NOW: 058-420-1397</span>
    </header>
  );
};
Header.propTypes = {
  className: PropTypes.string
};

export default styled(Header)`
  width: 100%;
  position: fixed;
  top: 0;
  height: 80px;
  background: ${props => props.theme.darkBlue};
  z-index: 2;
  color: ${props => props.theme.brown};
  transition: top 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 700px) {
    height: 40px;
  }

  .siteText {
    font-family: 'Burnstowndam';
    font-size: 3rem;
    padding-left: 15px;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      font-size: 2rem;
      padding-left: 5px;
    }
  }

  .whiteText {
    color: ${props => props.theme.white};
  }
  .callNowText {
    padding: 10px;
    border: solid 1px ${props => props.theme.brown};
    margin-right: 15px;
    transition: all 0.5s ease;
    @media (max-width: 700px) {
      display: none;
    }
  }

  &.nav-up {
    top: -80px;
    @media (max-width: 700px) {
      top: -40px;
    }
  }
`;
