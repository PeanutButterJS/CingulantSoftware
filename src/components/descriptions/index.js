import styled from 'styled-components';
import PropTypes from 'prop-types';
import Description from './description';
import pallets1 from '../../assets/images/pallets1.jpg';

export const Descriptions = ({ className }) => (
  <div className={className}>
    <Description
      text="With our flagship program we can create using recycled wooden pallets
          made of genuin oak and rusty nails anything from cup holders to
          benches to decks at a fraction of the cost."
      title="The Pallet Option"
      image={pallets1}
    />
    <Description
      text="With our flagship program we can create using recycled wooden pallets
          made of genuin oak and rusty nails anything from cup holders to
          benches to decks at a fraction of the cost."
      title="The Pallet Option"
      image={pallets1}
      even
    />
    <Description
      text="With our flagship program we can create using recycled wooden pallets
          made of genuin oak and rusty nails anything from cup holders to
          benches to decks at a fraction of the cost."
      title="The Pallet Option"
      image={pallets1}
    />
  </div>
);

Descriptions.propTypes = {
  className: PropTypes.string
};

export default styled(Descriptions)`
  background: ${props => props.theme.white};
  padding-top: 20px;
`;
