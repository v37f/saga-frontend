import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './LoginForm.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import * as yup from 'yup';
import {
  CUSTOMER_ROLE,
  DEFAULT_ROUTE,
  PASSWORD_REGEX,
  SELLER_ROLE,
} from 'src/utils/constants';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from 'src/api/api';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  fetchCurrentUser,
  setIsLoggedIn,
} from 'src/service/slices/currentUserSlice';
import {
  getTargetUrl,
  setIsAuthModalOpen,
} from 'src/service/slices/modalsSlice';
import { useNavigate } from 'react-router-dom';
import { fetchFavoriteProducts } from 'src/service/slices/productsSlice';
import { fetchFavoriteArtists } from 'src/service/slices/artistsSlice';
import { useState } from 'react';

const loginSchema = yup.object({
  email: yup
    .string()
    .required('Введите email')
    .email('Введен некорректный email адрес'),
  password: yup
    .string()
    .required('Введите пароль')
    .matches(PASSWORD_REGEX, 'Пароль содержать только латниские буквы и цыфры')
    .min(8, 'Пароль должен содержать минимум 8 символов'),
  isSeller: yup.boolean().required(),
});

type LoginInputs = {
  email: string;
  password: string;
  isSeller: boolean;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const targetUrl = useAppSelector(getTargetUrl);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginInputs>({
    mode: 'all',
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      isSeller: false,
    },
  });
  const [requestErrorMessage, setRequestErrorMessage] = useState('');

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    login({
      email: data.email,
      password: data.password,
      role: data.isSeller ? SELLER_ROLE : CUSTOMER_ROLE,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem(
          'jwt',
          data.isSeller ? SELLER_ROLE : CUSTOMER_ROLE
        );
        dispatch(fetchCurrentUser(data.isSeller));
        dispatch(fetchFavoriteProducts());
        dispatch(fetchFavoriteArtists());
      })
      .then(() => {
        dispatch(setIsLoggedIn(true));
        dispatch(setIsAuthModalOpen(false));
        setTimeout(() => {
          navigate(data.isSeller ? DEFAULT_ROUTE : targetUrl);
        });
      })
      .catch((error) => {
        console.log(error);
        setRequestErrorMessage('');
      });
  };

  return (
    <form
      className={styles.loginForm}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      spellCheck={false}
    >
      <fieldset className={styles.inputs}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTypeText
              label="Email"
              type="text"
              error={errors.email?.message}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputTypeText
              label="Пароль"
              type="password"
              error={errors.password?.message}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
            />
          )}
          name="password"
        />
        <div className={styles.checkbox}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <input
                type="checkbox"
                className={styles.checkboxInput}
                id="seller"
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
              />
            )}
            name="isSeller"
          />
          <label htmlFor="seller" className={styles.checkboxLabel}>
            Войти как продавец
          </label>
        </div>
      </fieldset>
      <p className={styles.requestError}>{requestErrorMessage}</p>
      <SolidButton type="submit" disabled={!isValid}>
        Войти
      </SolidButton>
    </form>
  );
};

export default LoginForm;
