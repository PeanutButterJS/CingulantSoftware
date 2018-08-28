import styled from 'styled-components';

const Inner = styled.div`
  padding: 3em 0 1em 0;
  margin: 0 auto;
  width: 55em;
  box-sizing: border-box;
  @media screen and (max-width: 980px) {
    padding: 3em 3em 1em 3em;
    width: 100%;
  }
  @media screen and (max-width: 736px) {
    align-items: flex-start;
    padding: 2em 2em 0.1em 2em;
  }
  @media screen and (max-width: 480px) {
    display: block;
  }
`;

const Major = styled.h2`
  padding-bottom: 1em;
  border-bottom: solid 2px rgba(255, 255, 255, 0.125);
  font-size: 1.2em;
  color: ${props => props.theme.white};
  letter-spacing: 0.1em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  @media screen and (max-width: 736px) {
    font-size: 1em;
  }
`;

const Text = styled.p`
  margin: 0 0 2em 0;
  color: ${props => props.theme.white};
  font-family: 'OpenSansLight';
  line-height: 1.67;
  font-size: 0.9em;
`;

export const StyledPoints = styled.section`
  background-color: #2e9cca;
  margin: 6.5em 0;
  position: relative;
  @media screen and (max-width: 980px) {
    margin: 4.75em 0;
  }
  @media screen and (max-width: 736px) {
    margin: 2.5em 0;
  }
  :before,
  :after {
    left: 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    content: '';
    display: block;
    height: 6.5em;
    position: absolute;
    width: 100%;
    box-shadow: inset 0 -1px 0 0 ${props => props.theme.blue},
      0 1px 0 0 ${props => props.theme.blue};
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpolygon points='0,100 100,0 100,100' style='fill:%232e9cca%3B' /%3E%3C/svg%3E");
    @media screen and (max-width: 980px) {
      height: 4.75em;
    }
    @media screen and (max-width: 736px) {
      height: 2.5em;
    }
  }
  :before {
    transform: scaleX(-1);
    top: -6.5em;
    @media screen and (max-width: 980px) {
      top: -4.75em;
    }
    @media screen and (max-width: 736px) {
      top: -2.5em;
    }
  }
  :after {
    bottom: -6.5em;
    transform: scaleY(-1) scaleX(-1);
    @media screen and (max-width: 980px) {
      bottom: -4.75em;
    }
    @media screen and (max-width: 736px) {
      bottom: -2.5em;
    }
  }
`;

export const Points = () => (
  <StyledPoints>
    <Inner>
      <Major>This is the title for this section</Major>
      <Text>
        Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis
        ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id
        tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices,
        neque et faucibus viverra, ex nulla cursus.
      </Text>
    </Inner>
  </StyledPoints>
);

export default Points;
