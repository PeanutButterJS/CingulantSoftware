import styled from 'styled-components';
import { lighten } from 'polished';
import ScrollableAnchor from 'react-scrollable-anchor';
import { icons } from '../../../constants/icons';
import { texts } from '../../../constants/service-texts';
import Title from '../../common/title';
import Text from './text';
import Box from './box';

const StyledContent = styled.section`
  background: ${props =>
    `linear-gradient(${props.theme.darkBlue}, ${lighten(
      0.1,
      props.theme.darkBlue
    )})`};
  padding: 50px 5px 50px;
  text-align: center;
  position: relative;
`;

const BoxContainer = styled.div`
  padding: 30px 0px;
  display: flex;
  width: 75%;
  margin: auto;
  justify-content: space-between;

  @media screen and (max-width: 980px) and (min-width: 736px) {
    width: 30%;
    align-items: center;
    flex-direction: column;
  }
`;

const BoxTextContainer = styled.div`
  flex-direction: column;
  display: flex;
  @media screen and (max-width: 980px) and (min-width: 736px) {
    flex-direction: row;
  }
`;

const Link = styled.a`
  color: ${props => props.theme.darkBlue};
  padding: 20px 40px;
  font-size: 0.8em;
  z-index: 1;
  display: inline-block;
  position: relative;
  font-weight: bold;
  text-decoration: none;
  margin-top: 30px;
  border-radius: 9px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  background: ${props =>
    `linear-gradient(${lighten(0.15, props.theme.orange)}, ${
      props.theme.orange
    })`};
`;

export class OurServices extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenBox: 'design'
    };
  }

  chooseBox(box) {
    this.setState({ chosenBox: box });
  }

  render() {
    return (
      <ScrollableAnchor id="OurServices">
        <StyledContent>
          <Title>Our Services</Title>
          <BoxTextContainer>
            <BoxContainer>
              <Box
                onClick={() => this.chooseBox('design')}
                chosen={this.state.chosenBox === 'design'}
                icon={icons.design}
                title="Design"
              />
              <Box
                onClick={() => this.chooseBox('development')}
                chosen={this.state.chosenBox === 'development'}
                icon={icons.development}
                title="Development"
              />
              <Box
                onClick={() => this.chooseBox('maintenance')}
                chosen={this.state.chosenBox === 'maintenance'}
                icon={icons.maintenance}
                title="Maintenance"
              />
              <Box
                onClick={() => this.chooseBox('training')}
                chosen={this.state.chosenBox === 'training'}
                icon={icons.training}
                title="Training"
              />
            </BoxContainer>
            <Text
              title={this.state.chosenBox}
              text={texts[this.state.chosenBox]}
            />
          </BoxTextContainer>
          <Link href="#contact">GET STARTED</Link>
        </StyledContent>
      </ScrollableAnchor>
    );
  }
}

export default OurServices;
