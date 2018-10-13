import styled from 'styled-components';
import Title from '../common/title';
import theme from '../../constants/theme';
import SlantedContent from '../common/slanted-content';
import Feature from './feature';
import { icons } from '../../constants/icons';

const Text = styled.p`
  margin: 0 0 3.5em 0;
  color: ${props => props.theme.veryLightBlue};
  font-family: 'OpenSans';
  line-height: 1.67;
  font-size: 0.9em;
`;

const FeaturesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0;
  width: 100%;
  margin: 0 0 2em 0;
  box-sizing: inherit;
`;

const Inner = styled.div`
  padding: 3em 0 1em 0;
  margin: 0 auto;
  width: 55em;
  box-sizing: border-box;
  @media screen and (max-width: 1280px) {
    width: 90%;
  }
  @media screen and (max-width: 980px) {
    padding: 3em 3em 1em 3em;
    width: 100%;
  }
  @media screen and (max-width: 736px) {
    align-items: flex-start;
    padding: 2em 2em 0.1em 2em;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

export const Features = () => (
  <SlantedContent color={theme.blue}>
    <Inner>
      <Title>We&apos;ve got you covered</Title>
      <Text>
        Cingulat offers the full range of services to give you the piece of mind
        you need to run your buisness. So go get yourself a cup of coffee and
        put your feet up on the desk and we&apos;ll take care of the rest.
      </Text>
      <FeaturesWrapper>
        <Feature child={1} name="check" icon={icons.check} title="UI/UX Design">
          We help design a smooth user interface and expririence. Fit all screen
          sizes and devices.
        </Feature>
        <Feature
          child={2}
          name="check"
          icon={icons.check}
          title="Website Development"
        >
          Development of both backend and front end of website matching your
          requirmenets with the latest technology.
        </Feature>
        <Feature child={3} name="check" icon={icons.check} title="Site Launch">
          Getting your site up and running. Including automated migrations and
          integration.
        </Feature>
        <Feature child={4} name="check" icon={icons.check} title="Testing">
          Avoid bugs with full testing of code and functionality.
        </Feature>
        <Feature child={5} name="check" icon={icons.check} title="Support">
          Mantinance, hosting, data analasis
        </Feature>
        <Feature child={6} name="check" icon={icons.check} title="Training">
          On site and phone training with your team.
        </Feature>
      </FeaturesWrapper>
    </Inner>
  </SlantedContent>
);

export default Features;
