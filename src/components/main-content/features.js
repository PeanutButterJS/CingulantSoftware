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
        <Feature
          child={1}
          name="database"
          icon={icons.database}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
        <Feature
          child={2}
          name="users"
          icon={icons.users}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
        <Feature
          child={3}
          name="mug"
          icon={icons.mug}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
        <Feature
          child={4}
          name="earth"
          icon={icons.earth}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
        <Feature
          child={5}
          name="rocket"
          icon={icons.rocket}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
        <Feature
          child={6}
          name="trophy"
          icon={icons.trophy}
          title="This is the title"
        >
          Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
          tincidunt nullam amet leo Aenean ligula consequat consequat.
        </Feature>
      </FeaturesWrapper>
    </Inner>
  </SlantedContent>
);

export default Features;
