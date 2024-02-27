import { AppBar } from 'Components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from 'Components/Container/Container';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
