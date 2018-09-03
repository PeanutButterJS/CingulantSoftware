import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledField = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1.5em 0 0 1.5em;
  width: calc(100% - 1.5em);
  box-sizing: border-box;
  @media screen and (max-width: 480px) {
    padding: 1.5em 0 0 1.5em;
    width: calc(100% - 1.5em);
  }
`;

const Label = styled.label`
  color: ${props => props.theme.white};
  display: block;
  font-size: 0.8em;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 0.7em 0;
  text-transform: uppercase;
`;

export const Field = ({ name, label, children }) => (
  <StyledField>
    <Label for={name}>{label}</Label>
    {children}
  </StyledField>
);

Field.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node
};

export default Field;
