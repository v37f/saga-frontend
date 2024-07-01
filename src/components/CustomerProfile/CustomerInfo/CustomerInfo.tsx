import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './CustomerInfo.module.scss';
import EditIcon from 'src/assets/images/components/edit.svg';
import CrossIcon from 'src/assets/images/components/cross.svg';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { useState } from 'react';
import * as yup from 'yup';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'src/service/hooks';
import {
  getCurrentUserData,
  updateCurrentUserInfo,
} from 'src/service/slices/currentUserSlice';
import { PHONE_NUMBER_REGEX } from 'src/utils/constants';

const userInfoSchema = yup.object({
  lastName: yup
    .string()
    .max(40, 'Фамилия может содержать максимум 40 символов'),
  name: yup.string().max(40, 'Имя может содержать максимум 40 символов'),
  surname: yup
    .string()
    .max(40, 'Отчество может содержать максимум 40 символов'),
  email: yup
    .string()
    .required('Введите email')
    .email('Введен некорректный email адрес'),
  phone: yup
    .string()

    .matches(
      PHONE_NUMBER_REGEX,
      'Номер должен начинаться с +7 и состоять из 10 цифр'
    )
    .length(12, 'Номер должен состоять из 10 цифр'),
});

type UserInfoInputs = {
  lastName?: string;
  name?: string;
  surname?: string;
  email: string;
  phone?: string;
};

const CustomerInfo = () => {
  const [enableEdit, setEnableEdit] = useState(false);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(getCurrentUserData);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<UserInfoInputs>({
    mode: 'all',
    resolver: yupResolver(userInfoSchema),
    defaultValues: {
      lastName: currentUser.lastName,
      name: currentUser.name,
      surname: currentUser.surname,
      email: currentUser.email,
      phone: currentUser.phone,
    },
  });

  const onSubmit: SubmitHandler<UserInfoInputs> = (data) => {
    dispatch(updateCurrentUserInfo({ ...currentUser, ...data }));
    setEnableEdit(false);
  };

  const OnEditButtonClick = () => {
    if (enableEdit) {
      reset();
      setEnableEdit(false);
    } else {
      setEnableEdit(true);
    }
  };

  return (
    <div className={styles.customerInfo}>
      <div className={styles.header}>
        <h3 className={styles.title}>Личная информация</h3>
        <button
          className={`${styles.button} ${enableEdit ? styles.cancel : ''}`}
          onClick={OnEditButtonClick}
        >
          {enableEdit ? <CrossIcon /> : <EditIcon />}
          {enableEdit ? 'Отмена' : 'Редактировать'}
        </button>
      </div>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        spellCheck={false}
      >
        <fieldset className={styles.fieldset} disabled={!enableEdit}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Фамилия"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.lastName?.message}
              />
            )}
            name="lastName"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Имя"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.name?.message}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Отчество"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.surname?.message}
              />
            )}
            name="surname"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Email"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Телефон"
                type="tel"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.phone?.message}
              />
            )}
            name="phone"
          />
        </fieldset>
        <div className={styles.submit}>
          <SolidButton type="submit" disabled={!enableEdit || !isValid}>
            Сохранить
          </SolidButton>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfo;
