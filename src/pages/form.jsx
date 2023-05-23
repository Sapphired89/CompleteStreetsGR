import React, { lazy, Suspense } from 'react';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import './form/Form.css';

const LazyHeader = lazy(() => import('./form/header'));
const LazyContent = lazy(() => import('./form/content'));
const LazyFooter = lazy(() => import('./form/footer'));

const override = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = () => {
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

export default Form;

