import {AppProps} from 'next/app';
import React from 'react';

function App({Component, pageProps}: AppProps) {
  if (typeof window === 'undefined') return null;
  return <Component {...pageProps} />;
}
export default App;