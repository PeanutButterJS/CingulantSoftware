import styled from 'styled-components';
import { lighten } from 'polished';

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

const Title = styled.h3`
  padding-bottom: 10px;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  font-weight: normal;
`;
const Title2 = styled.h4`
  padding-bottom: 30px;
  color: ${props => props.theme.darkBlue};
  text-transform: uppercase;
  font-weight: normal;
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlue};
  padding: 20px 40px;
  font-size: 0.8em;
  z-index: 1;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  border-radius: 9px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${props =>
    `linear-gradient(${lighten(0.15, props.theme.orange)}, ${
      props.theme.orange
    })`};
`;

export const LinkSection = () => (
  <StyledContent id="linkContent">
    <Title>Got an idea for a project?</Title>
    <Title2>Tell us about it</Title2>
    <Link href="#contact">CONTACT NOW</Link>
  </StyledContent>
);

export default styled(LinkSection)``;
