import { Field } from 'formik';
import PropTypes from 'prop-types';
import clsx from '../../../utils/clsx';

function InputField(props) {
  const {
    className, name, errors, touched,
  } = props;

  return (
    <>
      <div className="input">
        <Field
          {...props}
          className={clsx('input-field', className)}
        />
      </div>
      <div className="text-sm text-red-500">
        {touched[name] && errors[name]}
      </div>
    </>
  );
}

InputField.defaultProps = {
  className: '',
  errors: [],
  touched: [],
};

InputField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  touched: PropTypes.arrayOf(PropTypes.string),
};

export default InputField;
