
import { Routes, Route } from "react-router-dom";
import { Layout } from "Components/Layout/Layout";
import { lazy } from "react";


const HomePage = lazy(() => import('../src/pages/HomePage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
         <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
