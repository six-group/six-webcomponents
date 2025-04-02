import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from 'src/routes/home/home';
import { Layout } from 'src/routes/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Alert } from '@views/alert/alert';
import { TabGroup } from '@views/tabGroup/tabGroup';
import { Form } from '@views/form/form';
import { Dialog } from '@views/dialog/dialog';

import '@six-group/ui-library/dist/ui-library/ui-library.css';
import { Details } from '@views/details/details';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/dialog" element={<Dialog />} />
          <Route path="/details" element={<Details />} />
          <Route path="/tab-group" element={<TabGroup />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
