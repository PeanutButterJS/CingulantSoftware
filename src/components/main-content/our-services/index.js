import styled from 'styled-components';
import { lighten } from 'polished';

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

const Title = styled.h3`
  padding-bottom: 10px;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-weight: normal;
`;
const Title2 = styled.h4`
  padding-bottom: 30px;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  font-weight: normal;
`;

export const OurServices = () => (
  <StyledContent id="linkContent">
    <Title>Got an idea for a project?</Title>
    <Title2>Tell us about it</Title2>
  </StyledContent>
);

export default styled(OurServices)``;
