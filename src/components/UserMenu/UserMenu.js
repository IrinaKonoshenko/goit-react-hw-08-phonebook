import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authOperations';
import { selectEmail } from 'redux/auth/authSelectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const currentUserEmail = useSelector(selectEmail);

  const onClick = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{currentUserEmail}</p>
      <button onClick={onClick}>Logout</button>
    </div>
  );
};
