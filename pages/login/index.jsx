import LoginForm from '../../components/modules/LoginForm/LoginForm';

function Login() {
  return (
    <div className="flex justify-center mt-24 align-items-center">
      <div className="px-10 py-16 bg-white shadow-lg">
        <h1 className="mb-4 text-6xl text-center font-logo text-accent">EQuizz</h1>
        <p className="mb-8 text-center text-gray-600">Please login to continue</p>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
