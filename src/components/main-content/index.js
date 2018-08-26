import styled from 'styled-components';
import SlantedContent from './wrapper';
import image2 from '../../assets/images/image2.jpg';

const StyledContent = styled.section`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
`;

export const MainContent = () => (
  <StyledContent>
    <SlantedContent odd image={image2} title="Magna arcu feugiat">
      Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante,
      nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus
      arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et
      faucibus viverra, ex nulla cursus.
    </SlantedContent>
  </StyledContent>
);

export default styled(MainContent)``;
