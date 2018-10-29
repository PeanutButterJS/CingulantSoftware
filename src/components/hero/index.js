import Styled from 'styled-components';

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
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 736px) {
    margin: 0 0 1em 0;
    flex-direction: column;
  }

  &.preload {
    transform: translateY(0.5em);
    opacity: 0;
  }

`;
const Slant = Styled.div`
  width: 1600px;
  height: 1600px;
  background-color: rgba(0, 205, 205,.7);
  position: absolute;
  transform: rotate(-145deg);
  left: -1482px;
  top: -1000px;
  z-index: 3;
`;

const Slant2 = Styled.div`
  width: 200px;
  height: 1700px;
  background-color: rgba(255, 165, 0, .8);;
  position: absolute;
  transform: rotate(-35deg);
  left: 50px;
  top: -1000px;
  z-index: 3;
  @media screen and (max-width: 736px) {
    width: 40px;
  }
`;

const TitleMainText = Styled.h2`
    transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.65s;
    filter: blur(0);
    opacity: 1;
    font-size: 1.7em;
    margin-bottom: 0.6em;
    padding-bottom: 0.4em;
    letter-spacing: 0.1em;
    text-transform: uppercase;   
    width: 40%;
    line-height: 1.6;
    z-index: 4;

    @media screen and (max-width: 736px) {
      font-size: 1.5em;
      width: 100%;
      text-align: center;
    }
   

  &.preload {
    opacity: 0;
    transform: translateX(0.25em);
    filter: blur(2px);
  }
`;

const TitleSecondText = Styled.h3`
transition: opacity 0.5s ease, transform 0.5s ease, filter 0.25s ease;
    transform: translateX(0);
    transition-delay: 0.8s;
    filter: blur(0);
    opacity: 1;
    font-size: 1em;
    letter-spacing: 0.1em;
    line-height: 1.6;
    width: 40%;
    z-index: 4;
    text-transform: uppercase; 
    font-family: 'OpenSansLight'; 

    @media screen and (max-width: 736px){
    font-size: 0.8em;
    width: 100%;
    text-align: center;
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
  position: relative;
  overflow: hidden;

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
            <Slant />
            <Slant2 />
            <TitleMainText className="preload">
              Get a personalized development team
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
