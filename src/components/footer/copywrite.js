import styled from 'styled-components';

const StyledCopyWrite = styled.ul`
  border-top: solid 2px rgba(255, 255, 255, 0.125);
  list-style: none;
  margin: 4em 0 2em 0;
  padding: 2em 0 0 0;
  width: 100%;
  @media screen and (max-width: 980px) {
    margin: 4em 0 2em 0;
  }
`;

const Item = styled.li`
  border-left: solid 2px rgba(255, 255, 255, 0.125);
  color: rgba(255, 255, 255, 0.35);
  display: inline-block;
  font-size: 0.9em;
  line-height: 1;
  margin-left: 1em;
  padding: 0;
  padding-left: 1em;
  &:first-child {
    border-left: 0;
    margin-left: 0;
    padding-left: 0;
    @media screen and (max-width: 480px) {
      margin-top: 0;
    }
  }
  @media screen and (max-width: 480px) {
    border-left: 0;
    display: block;
    margin: 1em 0 0 0;
    padding-left: 0;
  }
`;

export const CopyWrite = () => (
  <StyledCopyWrite>
    <Item>© 2018 Cingulant Sofware · All rights reserved</Item>
    <Item>Powered By PeanutButterJS</Item>
  </StyledCopyWrite>
);

export default CopyWrite;
