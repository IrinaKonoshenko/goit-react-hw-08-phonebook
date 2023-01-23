import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">Go to main</Link>
    </div>
  );
};
