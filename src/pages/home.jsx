import React, { lazy, Suspense } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const LazyHeader = lazy(() => import('./home/header'));
const LazyContent = lazy(() => import('./home/content'));
const LazyFooter = lazy(() => import('./home/footer'));

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Home = () => {
  return (
    <div className="container">
      <Suspense fallback={<ClipLoader css={override} size={50} color={'#123abc'} />}>
        <LazyHeader />
      </Suspense>
      <Suspense fallback={<ClipLoader css={override} size={50} color={'#123abc'} />}>
        <LazyContent />
      </Suspense>
      <Suspense fallback={<ClipLoader css={override} size={50} color={'#123abc'} />}>
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default Home;

