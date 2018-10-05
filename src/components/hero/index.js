import Styled from 'styled-components';
import Logo from '../logo';

const Inner = Styled.div`
  margin: 0 auto;
  width: 55em;

  @media screen and (max-width: 980px) {
    width: 100%;
  }
`;

const LogoWrapper = Styled.div`
 transition: opacity 2s ease, transform 1s ease;
  transform: translateY(0);
  opacity: 1; 
  margin: 0 0 1.3em 0;

  @media screen and (max-width: 736px) {
    margin: 0 0 1em 0;
  }

  &.preload {
    transform: translateY(0.5em);
    opacity: 0;
  }

`;

const TitleMainText = Styled.h2`
    transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.65s;
    filter: blur(0);
    opacity: 1;
    border-bottom: solid 2px rgba(255, 255, 255, 0.125);
    font-size: 2.25em;
    margin-bottom: 0.6em;
    padding-bottom: 0.4em;
    letter-spacing: 0.1em;
    text-transform: uppercase;   

    @media screen and (max-width: 736px) {
      font-size: 1.5em;
    }

  &.preload {
    opacity: 0;
    transform: translateX(0.25em);
    filter: blur(2px);
  }
`;

const TitleSecondText = Styled.p`
transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.8s;
    filter: blur(0);
    opacity: 1;
    font-size: 1em;
    letter-spacing: 0.1em;
    line-height: 2;
    text-transform: uppercase; 
    font-family: 'OpenSansLight'; 

    @media screen and (max-width: 736px){
    font-size: 0.8em;
    }

  &.preload {
    opacity: 0;
    transform: translateX(0.5em);
    filter: blur(2px);
  }
`;

const StyledHero = Styled.div`
 color: white;
  padding: 10em 0 4.75em 0;

  @media screen and (max-width: 1280px) {
    padding: 7em 0 8.25em 0;
    margin-bottom: -6.5em;
  }

  @media screen and (max-width: 980px) {
    padding: 12em 3em 12.375em 3em;
    margin-bottom: -4.75em;
  }

  @media screen and (max-width: 736px) {
    padding: 5em 2em 4.25em 2em;
    margin-bottom: -2.5em;
  }
`;

export class Hero extends React.Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      Array.from(document.getElementsByClassName('preload')).forEach(el => {
        el.classList.remove('preload');
      });
    }, 100);
  }
  render() {
    return (
      <StyledHero>
        <Inner>
          <LogoWrapper className="preload">
            <Logo />
            <TitleMainText className="preload">
              Cingulant Software
            </TitleMainText>
            <TitleSecondText className="preload">
              Building your buisness by building your platform!
            </TitleSecondText>
          </LogoWrapper>
        </Inner>
      </StyledHero>
    );
  }
}

export default Hero;
