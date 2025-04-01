import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Auth from '../components/Auth';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (!user) return <Auth />;

  return <Component {...pageProps} />;
}

export default MyApp;