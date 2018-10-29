import styled from 'styled-components';
import LinkSection from './link-section';
import OurServices from './our-services';
import AboutCingulant from './about-cingulant';
import OurApproach from './our-approach';
import Technologies from './technologies';
/* import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import theme from '../../constants/theme';
import Features from './features';
import ImageContent from './image-content'; */

const StyledContent = styled.section`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

export const MainContent = () => (
  <StyledContent id="content">
    <LinkSection />
    <OurServices />
    <AboutCingulant />
    <OurApproach />
    <Technologies />
    {/* <ImageContent
      odd
      image={image2}
      title="Our Websites"
      color={theme.darkBlue}
    >
      For most of your customers, your website is the face of your product or
      service and the first glimpse at your brand offering. It can also be your
      launchpad, propelling users into your story and unique differentiation.
      Your message needs to be delivered clearly, assuring that you create
      interest and establish credibility while meeting your business goals and
      the goals of your users. We design and develop high-end websites that tell
      the story of your brand in a captivating way. From company websites to
      campaign landing pages to e-commerce platforms, our creative engineering
      initiatives will skyrocket your reputation and recognition. High-end
      aesthetics spark desire. Coupling that with clear messaging, amazing
      layout, and meaningful content, we’ll represent you and your brand in the
      best light possible. No matter the extent of your features or your
      content, without good design and strategic messaging, your functionality
      and content can be lost. We justify our design work with research,
      testing, and analytics. We optimize for usability, speed, SEO, and
      conversion, partnering with you to design slick and organized website UI
      that creates a frictionless experience. Your visitors will spend only
      split seconds thinking about how to navigate, allowing them to focus
      solely on your message, the value of your calls to action, and the
      engagement of your brand.
    </ImageContent>
    <ImageContent image={image3} title="Our Team" color={theme.mediumBlue}>
      Cingulant is an integrated consulting team of designers, developers, and
      engineers that builds fresh experiences people love. Powered by our
      design-led innovation process we deliver end-to-end experiences to help
      businesses grow. From creative brands and websites to intuitive apps and
      systems to digital hardware and robots, we work with you from strategy to
      execution to create whats next.
    </ImageContent>
    <ImageContent odd image={image4} title="Our Mission" color={theme.darkBlue}>
      Keep It Simple!!
    </ImageContent>
    <Features /> */}
  </StyledContent>
);

export default styled(MainContent)``;
