import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { name, email, password } = form.elements;

    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input type="text" name="name" placeholder="Введите ваше Имя" />
      <input type="email" name="email" placeholder="Введите ваш E-mail" />
      <input type="password" name="password" placeholder="Введите ваш Пароль" />
      <button type="submit">Создать аккаунт</button>
      <Link to="/login">Войти</Link>
    </form>
  );
};
