import 'tailwindcss/tailwind.css';
import setAxiosConfig from '../utils/axios-config';

setAxiosConfig();

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
