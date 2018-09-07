import styled from 'styled-components';

export const Button = styled.input`
  appearance: none;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 5px;
  border: 0;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.125);
  color: #ffffff !important;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  font-weight: bold;
  height: 3.75em;
  letter-spacing: 0.1em;
  line-height: 3.75em;
  padding: 0 2.25em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default Button;
