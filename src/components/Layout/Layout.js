import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="layout">
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
