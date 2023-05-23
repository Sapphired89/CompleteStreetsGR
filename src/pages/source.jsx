import React, { lazy, Suspense } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const LazyHeader = lazy(() => import('./source/header'));
const LazyContent = lazy(() => import('./source/content'));
const LazyFooter = lazy(() => import('./source/footer'));

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Source = () => {
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

export default Source;