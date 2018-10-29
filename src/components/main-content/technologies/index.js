import styled from 'styled-components';
import { darken } from 'polished';
import PropTypes from 'prop-types';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import ScrollableAnchor from 'react-scrollable-anchor';
import IconAmazonwebservices from 'react-devicon/amazonwebservices/original-wordmark';
import IconAngularjs from 'react-devicon/angularjs/plain-wordmark';
import IconBabel from 'react-devicon/babel/plain';
import IconBackbonejs from 'react-devicon/backbonejs/original-wordmark';
import IconBootstrap from 'react-devicon/bootstrap/plain-wordmark';
import IconBower from 'react-devicon/bower/original-wordmark';
import IconCoffeescript from 'react-devicon/coffeescript/original-wordmark';
import IconCsharp from 'react-devicon/csharp/plain';
import IconCss3 from 'react-devicon/css3/original-wordmark';
import IconDocker from 'react-devicon/docker/original-wordmark';
import IconDotNet from 'react-devicon/dot-net/original-wordmark';
import IconDrupal from 'react-devicon/drupal/original-wordmark';
import IconElm from 'react-devicon/elm/original-wordmark';
import IconEmber from 'react-devicon/ember/original-wordmark';
import IconGit from 'react-devicon/git/original-wordmark';
import IconGithub from 'react-devicon/github/original-wordmark';
import IconGo from 'react-devicon/go/original';
import IconGrunt from 'react-devicon/grunt/original-wordmark';
import IconGulp from 'react-devicon/gulp/plain';
import IconHtml5 from 'react-devicon/html5/original-wordmark';
import IconJava from 'react-devicon/java/original-wordmark';
import IconJavascript from 'react-devicon/javascript/original';
import IconJquery from 'react-devicon/jquery/original-wordmark';
import IconLess from 'react-devicon/less/plain-wordmark';
import IconMeteor from 'react-devicon/meteor/original-wordmark';
import IconMongodb from 'react-devicon/mongodb/original-wordmark';
import IconMysql from 'react-devicon/mysql/original-wordmark';
import IconPostgresql from 'react-devicon/postgresql/original-wordmark';
import IconNodejs from 'react-devicon/nodejs/original-wordmark';
import IconNpm from 'react-devicon/npm/original-wordmark';
import IconPhp from 'react-devicon/php/original';
import IconPython from 'react-devicon/python/original-wordmark';
import IconRails from 'react-devicon/rails/original-wordmark';
import IconReact from 'react-devicon/react/original-wordmark';
import IconRuby from 'react-devicon/ruby/original-wordmark';
import IconSass from 'react-devicon/sass/original';
import IconTypescript from 'react-devicon/typescript/plain';
import IconVuejs from 'react-devicon/vuejs/original-wordmark';
import IconWebpack from 'react-devicon/webpack/original-wordmark';
import IconWordpress from 'react-devicon/wordpress/plain-wordmark';
import IconYarn from 'react-devicon/yarn/original-wordmark';
import Title from '../../common/title';

const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 30%;
  height: 30vh;
`;
const CarouselUI = ({ children }) => <Container>{children}</Container>;

CarouselUI.propTypes = {
  children: PropTypes.node
};
const Carousel = makeCarousel(CarouselUI);

const StyledContent = styled.section`
  background: ${props =>
    `linear-gradient(${props.theme.white}, ${darken(0.1, props.theme.white)})`};
  padding: 50px 5px 50px;
  text-align: center;
  position: relative;
`;

const CarouselContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.darkBlue};
`;

export const Technologies = () => (
  <ScrollableAnchor id="Technologies">
    <StyledContent>
      <StyledTitle>WE USE ALL THE LATEST TECHNOLOGIES</StyledTitle>
      <CarouselContainer>
        <Carousel defaultWait={5000} maxTurns={500}>
          <Fade>
            <IconAmazonwebservices width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconBabel width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconBootstrap width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconBower width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconCoffeescript width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconCsharp width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconCss3 width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconGrunt width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconGulp width="100%" height="30vh" />
          </Fade>
        </Carousel>
        <Carousel defaultWait={4000} maxTurns={500}>
          <Fade>
            <IconPython width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconRails width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconReact width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconRuby width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconSass width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconTypescript width="100%" height="30vh" />
          </Fade>
        </Carousel>
        <Carousel defaultWait={9000} maxTurns={500}>
          <Fade>
            <IconHtml5 width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconJava width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconJavascript width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconJquery width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconLess width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconMeteor width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconMongodb width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconMysql width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconNodejs width="100%" height="30vh" />
          </Fade>
        </Carousel>
        <Carousel defaultWait={8000} maxTurns={500}>
          <Fade>
            <IconNpm width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconEmber width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconGit width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconAngularjs width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconBackbonejs width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconPhp width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconPostgresql width="100%" height="30vh" />
          </Fade>
        </Carousel>
        <Carousel defaultWait={7000} maxTurns={500}>
          <Fade>
            <IconVuejs width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconWebpack width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconWordpress width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconYarn width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconDocker width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconDotNet width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconDrupal width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconElm width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconGithub width="100%" height="30vh" />
          </Fade>
          <Fade>
            <IconGo width="100%" height="30vh" />
          </Fade>
        </Carousel>
      </CarouselContainer>
    </StyledContent>
  </ScrollableAnchor>
);

export default Technologies;
