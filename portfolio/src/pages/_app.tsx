import {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import Navbar from './components/navbar';
import '../app/layout'

function App({Component, pageProps}: AppProps) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);
  return render ? 
  <>
      <Navbar />
      <div style={{ paddingTop: '50px' }}> {/* Adjust padding here */}
        <Component {...pageProps} />
      </div>
    </>
  : null;
}
export default App;