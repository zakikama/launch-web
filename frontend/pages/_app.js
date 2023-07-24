// _app.js
import React from 'react';
import '../src/app/globals.css'; // Import your global styles here

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
