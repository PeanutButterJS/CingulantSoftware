import styled from 'styled-components';
import Icon from '../common/icon';
import { icons } from '../../constants/icons';

const StyledContactInfo = styled.ul`
  width: calc(50% - 1.5em);
  list-style: none;
  padding: 0;
  @media screen and (max-width: 980px) {
    width: 100%;
    margin: 0 0 4em 0;
  }
  @media screen and (max-width: 736px) {
    margin: 0 0 3em 0;
  }
`;

const InfoItem = styled.li`
  text-decoration: none;
  margin: 2.5em 0 0 0;
  padding: 0 0 0 3.25em;
  position: relative;
  font-family: 'OpenSansLight';
  color: ${props => props.theme.white};
  @media screen and (max-width: 736px) {
    margin: 1.5em 0 0 0;
  }
  :first-child {
    margin-top: 0;
  }
`;

const ContactIcon = styled(Icon)`
  :before {
    border-radius: 100%;
    border: solid 2px rgba(255, 255, 255, 0.125);
    display: inline-block;
    font-size: 0.8em;
    height: 2.5em;
    left: 0;
    line-height: 2.35em;
    position: absolute;
    text-align: center;
    top: -7px;
    width: 2.5em;
  }
`;

export const ContactInfo = () => (
  <StyledContactInfo>
    <InfoItem>
      <ContactIcon icon={icons.phone} />contactinfo1
    </InfoItem>
    <InfoItem>
      <ContactIcon icon={icons.facebook} />facebook
    </InfoItem>
    <InfoItem>
      <ContactIcon icon={icons.whatsapp} />whatsapp
    </InfoItem>
    <InfoItem>
      <ContactIcon icon={icons.github} />github
    </InfoItem>
    <InfoItem>
      <ContactIcon icon={icons.skype} />skype
    </InfoItem>
    <InfoItem>
      <ContactIcon icon={icons.linkedin} />linkedin
    </InfoItem>
  </StyledContactInfo>
);

export default ContactInfo;
