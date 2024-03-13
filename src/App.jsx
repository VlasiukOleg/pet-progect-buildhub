import { Routes, Route } from 'react-router-dom';
import { Layout } from 'Components/Layout/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../src/pages/HomePage'));
const OrderPage = lazy(() => import('../src/pages/OrderPage'));
const MaterialsPage = lazy(() => import('../src/pages/MaterialPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="materials" element={<MaterialsPage />} />
        <Route path="order" element={<OrderPage />} />
      </Route>
    </Routes>
  );
};
