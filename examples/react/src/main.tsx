import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Home } from 'src/routes/home/home';
import { Layout } from 'src/routes/layout/layout';
import { BrowserRouter, Route, Routes } from 'react-router';
import { Alert } from '@views/alert/alert';
import { TabGroup } from '@views/tabGroup/tabGroup';

import '@six-group/ui-library/dist/ui-library/ui-library.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<div>todo</div>} />
          <Route path="/alert" element={<Alert />} />
          <Route path="/dialog" element={<div>todo</div>} />
          <Route path="/details" element={<div>todo</div>} />
          <Route path="/tab-group" element={<TabGroup />} />
          <Route path="*" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
