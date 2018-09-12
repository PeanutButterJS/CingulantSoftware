import styled from 'styled-components';
import Title from '../common/title';
import Text from '../common/text';
import EmailForm from './email-form';
import ContactInfo from './contact-info';
import CopyWrite from './copywrite';

const StyledFooter = styled.footer``;
const Inner = styled.div`
  padding: 5em 0 3em 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 55em;
  box-sizing: border-box;
  @media screen and (max-width: 980px) {
    padding: 3em 3em 1em 3em;
    display: block;
    width: 100%;
  }
  @media screen and (max-width: 736px) {
    padding: 2em 2em 0.1em 2em;
  }
`;
const StyledText = styled(Text)`
  width: 100%;
`;
const StyledTitle = styled(Title)`
  width: 100%;
`;

export const Footer = () => (
  <StyledFooter>
    <Inner>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledText>
        Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
        Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas,
        purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
        ac elementum arcu. Quisque placerat auctor laoreet.
      </StyledText>
      <EmailForm />
      <ContactInfo />
      <CopyWrite />
    </Inner>
  </StyledFooter>
);

export default Footer;
