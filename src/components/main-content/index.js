import styled from 'styled-components';
import SlantedContent from './slanted-content';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import theme from '../../constants/theme';
import Points from './points';

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
    <SlantedContent
      odd
      image={image2}
      title="Magna arcu feugiat"
      color={theme.darkBlue}
    >
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus
      arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et
      faucibus viverra, ex nulla cursus.
    </SlantedContent>
    <SlantedContent
      image={image3}
      title="Magna arcu feugiat"
      color={theme.mediumBlue}
    >
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus
      arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et
      faucibus viverra, ex nulla cursus.
    </SlantedContent>
    <SlantedContent
      odd
      image={image4}
      title="Magna arcu feugiat"
      color={theme.darkBlue}
    >
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus
      arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et
      faucibus viverra, ex nulla cursus.
    </SlantedContent>
    <Points />
  </StyledContent>
);

export default styled(MainContent)``;
