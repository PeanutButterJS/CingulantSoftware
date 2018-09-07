import styled from 'styled-components';

export const Textarea = styled.textarea`
  padding: 0.75em 1em;
  appearance: none;
  background: rgba(255, 255, 255, 0.025);
  border-radius: 5px;
  border: solid 2px rgba(255, 255, 255, 0.125);
  color: ${props => props.theme.white};
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
  flex-direction: column;
  resize: auto;
  cursor: text;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 16.5pt;
  font-weight: 300;
  line-height: 1.65;
  box-sizing: border-box;
  &:focus {
    border-color: ${props => props.theme.blue};
  }
`;

export default Textarea;
