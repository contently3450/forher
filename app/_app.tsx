import { AppProps } from 'next/app'; // Import AppProps type
// import '../styles/globals.css';
import './globals.css';


export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}