/* eslint-disable react/button-has-type */
import PropTypes from 'prop-types';
import clsx from '../../../utils/clsx';

function Button({ children, className, type }) {
  return (
    <button
      className={clsx('btn', className)}
      type={type}
    >
      { children }
    </button>
  );
}

Button.defaultProps = {
  className: '',
  type: 'submit',
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default Button;
