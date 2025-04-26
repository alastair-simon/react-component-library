import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Button from './components/button/Button.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Button variant="primary">Button</Button>
  </StrictMode>
);
