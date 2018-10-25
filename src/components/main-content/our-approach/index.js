import styled from 'styled-components';
import ScrollableAnchor from 'react-scrollable-anchor';
import Title from '../../common/title';
import mp4 from '../../../assets/images/Spacious.mp4';

const StyledTitle = styled(Title)`
  position: absolute;
  top: 20px;
  left: 50%;
  z-index: 2;
  color: ${props => props.theme.darkBlue};
  transform: translate(-50%, -50%);
`;

const Text = styled.div`
  color: ${props => props.theme.darkBlue};
  font-size: 4em;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  @media screen and (max-width: 980px) {
    font-size: 3em;
  }
  @media screen and (max-width: 736px) {
    font-size: 2em;
  }
  @media screen and (max-width: 500px) {
    font-size: 1.3em;
  }
`;

const HomepageHeroModule = styled.div`
  border-right: none;
  border-left: none;
  position: relative;
  height: 75vh;
  @media screen and (max-width: 1200px) {
    height: 50vh;
  }
  @media screen and (max-width: 736px) {
    height: 25vh;
  }
`;

const VideoContainer = styled.div`
  position: relative;
  bottom: 0%;
  left: 0%;
  height: 75vh;
  width: 100%;
  overflow: hidden;
  background: #000;
  @media screen and (max-width: 1200px) {
    height: 50vh;
  }
  @media screen and (max-width: 736px) {
    height: 25vh;
  }
`;

const Filter = styled.div`
  z-index: 1;
  position: absolute;
  background: rgba(250, 250, 250, 0.5);
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  position: absolute;
  z-index: 0;
  bottom: 0;
  width: 100%;
`;

export const OurApproach = () => (
  <ScrollableAnchor id="OurApproach">
    <HomepageHeroModule className="homepage-hero-module">
      <VideoContainer className="video-container">
        <Filter className="filter" />
        <Video autoPlay loop className="fillWidth">
          <source src={mp4} type="video/mp4" />Your browser does not support the
          video tag. I suggest you upgrade your browser.
          <source src="PATH_TO_WEBM" type="video/webm" />Your browser does not
          support the video tag. I suggest you upgrade your browser.
        </Video>
        <StyledTitle>Our Approach</StyledTitle>
        <Text>Keep It Simple!</Text>
      </VideoContainer>
    </HomepageHeroModule>
  </ScrollableAnchor>
);

export default OurApproach;
