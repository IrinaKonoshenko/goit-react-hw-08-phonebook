import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    dispatch(login({ email: email.value, password: password.value }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      <input type="email" name="email" placeholder="Введите ваш E-mail" />
      <input type="password" name="password" placeholder="Введите ваш Пароль" />
      <button type="submit">Войти</button>
      <Link to="/register">Регистрация</Link>
    </form>
  );
};
