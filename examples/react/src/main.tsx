import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from 'src/routes/home/home';
import { Layout } from 'src/routes/layout/layout';
import { HashRouter, Route, Routes } from 'react-router';
import { Alert } from '@routes/alert/alert';
import { TabGroup } from '@routes/tabGroup/tabGroup';
import { Form } from '@routes/form/form';
import { Dialog } from '@routes/dialog/dialog';
import { Details } from '@routes/details/details';

import '@six-group/ui-library/dist/ui-library/ui-library.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="/details" element={<Details />} />
          <Route path="/tab-group" element={<TabGroup />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
