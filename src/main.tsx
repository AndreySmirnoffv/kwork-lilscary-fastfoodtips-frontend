import App from '@app/';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@app/styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
