import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const StyledIcon = styled.i`
  :before {
    content: ${props => props.icon};
  }
`;

export const Icon = ({ className, icon, title }) => (
  <StyledIcon
    title={title}
    icon={icon}
    className={classnames(['icon-', className])}
  />
);

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string
};

export default Icon;
