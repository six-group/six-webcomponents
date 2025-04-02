import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from 'src/routes/home/home';
import { Layout } from 'src/routes/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Alert } from '@views/alert/alert';

import '@six-group/ui-library/dist/ui-library/ui-library.css';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/alert" element={<Alert />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
