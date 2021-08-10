import axios from 'axios';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Button from '../../elements/Button/Button';
import InputField from '../../elements/InputField/InputField';

const loginSchema = yup.object().shape({
  username: yup.string()
    .required(),
  password: yup.string()
    .min(8)
    .required(),
});

function LoginForm() {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={async (values) => {
        // TODO: login logic
        console.log(values);
        const res = await axios.post('auth/login', values);
        console.log(await res.data);
      }}
    >
      {(props) => (
        <Form>
          <InputField name="username" placeholder="Email / Username" {...props} />
          <InputField name="password" placeholder="Password" type="password" {...props} />
          <Button className="w-full mt-10">Sign In</Button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
