import styled from 'styled-components';
import { lighten } from 'polished';
import { icons } from '../../../constants/icons';
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
      <Box icon={icons.design} title="Design" />
      <Box icon={icons.development} title="Development" />
      <Box icon={icons.maintenance} title="Maintenance" />
      <Box icon={icons.training} title="Training" />
    </BoxContainer>
  </StyledContent>
);

export default OurServices;
