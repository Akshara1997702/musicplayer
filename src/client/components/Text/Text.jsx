import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const Text = (props) => {
  const { size, className, children, weight } = props;
  return (
    <div>
       <p className={classes}>{children}</p>
    </div>
  )
}

Text.propTypes = {
  className: PropTypes.string,
  children:PropTypes.node.isRequired,
  size: PropTypes.oneOf([1,2,3,4,5,6,7,8]),
  weight: PropTypes.oneOf(['light', 'regular', 'bold', 'semiBold']),
}

Text.defaultProps = {
  className: null,
  size:1,
  weight:'regular',
}

export default Text;