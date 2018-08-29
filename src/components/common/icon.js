import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const StyledIcon = styled.i`
  :before {
    content: ${props => props.icon};
    font-size: 1.5em;
    display: block;
    color: #00ffcc;
    position: absolute;
    left: 1.75em;
    top: 2.75em;
  }
`;

export const Icon = ({ className, icon }) => (
  <StyledIcon icon={icon} className={classnames(['icon-', className])} />
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string
};

export default Icon;
