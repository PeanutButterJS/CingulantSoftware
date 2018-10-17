import styled from 'styled-components';
import { lighten } from 'polished';

const StyledContent = styled.section`
  background-color: ${props => props.theme.white};
  padding: 30px 5px 50px;
  text-align: center;
`;

const Title = styled.h4`
  padding-bottom: 40px;
  color: ${props => props.theme.darkBlue};
`;
const Link = styled.a`
  color: ${props => props.theme.darkBlue};
  padding: 20px 40px;
  font-size: 0.8em;
  font-weight: bold;
  text-decoration: none;
  border-radius: 9px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${props =>
    `linear-gradient(${lighten(0.15, props.theme.yellow)}, ${
      props.theme.yellow
    })`};
`;

export const LinkSection = () => (
  <StyledContent id="linkContent">
    <Title>Contact us for a free consultation</Title>
    <Link href="#contact">Contact Now</Link>
  </StyledContent>
);

export default styled(LinkSection)``;
