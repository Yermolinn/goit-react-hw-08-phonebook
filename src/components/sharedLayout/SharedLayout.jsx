import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PhoneBookBar from 'components/phoneBookBar/PhoneBookBar';
import { Container } from '@mui/material';
import SimpleBackdrop from 'components/phoneBook/loader/SimpleBackdropLoader';
const SharedLayout = () => {
  return (
    <>
      <PhoneBookBar />
      <Container maxWidth="sm">
        <Suspense fallback={<SimpleBackdrop isLoading={true} />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
