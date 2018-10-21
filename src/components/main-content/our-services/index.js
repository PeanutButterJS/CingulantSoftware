import styled from 'styled-components';
import { lighten } from 'polished';
import Title from '../../common/title';
import Box from './box';

const StyledContent = styled.section`
  background: ${props =>
    `linear-gradient(${props.theme.darkBlue}, ${lighten(
      0.1,
      props.theme.darkBlue
    )})`};
  padding: 50px 5px 50px;
  text-align: center;
  position: relative;
`;

const BoxContainer = styled.div`
  padding: 30px 5px;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 980px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const OurServices = () => (
  <StyledContent id="linkContent">
    <Title>Our Services</Title>
    <BoxContainer>
      <Box>Design</Box>
      <Box>Development</Box>
      <Box>Maintenance</Box>
      <Box>Training</Box>
    </BoxContainer>
  </StyledContent>
);

export default OurServices;
