import React, { lazy, Suspense } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const LazyHeader = lazy(() => import('./graphic/header'));
const LazyContent = lazy(() => import('./graphic/content'));
const LazyFooter = lazy(() => import('./graphic/footer'));

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Graphic = () => {
  return (
    <div className="container">
      <Suspense fallback={<ClipLoader css={override} size={50} color={'#123abc'} />}>
        <LazyHeader />
      </Suspense>
      <Suspense>
        <LazyContent />
      </Suspense>
      <Suspense>
        <LazyFooter />
      </Suspense>
    </div>
  );
};

export default Graphic;