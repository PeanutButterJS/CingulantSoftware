import styled from 'styled-components';
import { lighten } from 'polished';
import PropTypes from 'prop-types';

const Link = styled.a`
  color: ${props => props.theme.darkBlue};
  padding: ${props => (props.isHeader ? '10px 15px' : '20px 40px')};
  font-size: 0.8em;
  z-index: 1;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  border-radius: ${props => (props.isHeader ? '4px' : '9px')};
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${props =>
    `linear-gradient(${lighten(0.15, props.theme.orange)}, ${
      props.theme.orange
    })`};
  margin-right: ${props => (props.isHeader ? '20px' : '0')};
`;

export const ContactLink = ({ children, isHeader }) => (
  <Link isHeader={isHeader} href="#contact">
    {children}
  </Link>
);

ContactLink.propTypes = {
  children: PropTypes.string,
  isHeader: PropTypes.bool
};

export default ContactLink;
