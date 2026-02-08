import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ui/ErrorFallback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace('/')}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

/* error boundaries are like try-catch but for react rendering which basically allows us to react to javascript errors that occur during rendering meaning in react render logic and error boundaries are actually quite hard to use in react because for some reason they are still implemented using class components and in a very weird and hard to use way so therefore everyone just uses the package called react-error-boundary and this package all it does is to give us an error boundary component where we can pass in a fallback and also a function to reset the application whenever an error occurs and so to use this we basically wrap the entire application with this error boundary component */

/* we could have done it in the app component but it is not really part of our application tree itself */
