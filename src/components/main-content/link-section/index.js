import styled from 'styled-components';
import { lighten } from 'polished';
import Title from '../../common/title';
import ContactLink from '../../common/contact-link';

const StyledContent = styled.section`
  background-color: ${props => lighten(0.3, props.theme.grey)};
  background: ${props =>
    `linear-gradient(${lighten(
      0.35,
      props.theme.grey
    )} 40%, rgba(0,0,0,0) 30%), radial-gradient(farthest-corner at 0% 0%, ${lighten(
      0.34,
      props.theme.grey
    )} 70%, ${lighten(0.35, props.theme.grey)} 70%)`};
  padding: 60px 5px 80px;
  text-align: center;
  position: relative;

  @media screen and (max-width: 736px) {
    padding: 20px 5px;
  }
`;

const BlueTitle = styled(Title)`
  color: ${props => props.theme.darkBlue};
`;

const Title2 = styled.h4`
  padding-bottom: 30px;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  font-weight: normal;
`;

export const LinkSection = () => (
  <StyledContent id="linkContent">
    <BlueTitle>Got an idea for a project?</BlueTitle>
    <Title2>Tell us about it</Title2>
    <ContactLink>CONTACT NOW</ContactLink>
  </StyledContent>
);

export default styled(LinkSection)``;
