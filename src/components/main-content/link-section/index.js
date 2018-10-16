import styled from 'styled-components';

const StyledContent = styled.section`
  background-color: ${props => props.theme.white};
  height: 300px;
`;

export const LinkSection = () => <StyledContent id="linkContent" />;

export default styled(LinkSection)``;
