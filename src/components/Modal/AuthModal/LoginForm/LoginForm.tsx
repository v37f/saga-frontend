import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './LoginForm.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';

const LoginForm = () => {
  const requestError = '';
  return (
    <form
      className={styles.loginForm}
      onSubmit={() => console.log('submit')}
      noValidate
    >
      <fieldset className={styles.inputs}>
        <InputTypeText label="Email" type="text" error="" />
        <InputTypeText label="Пароль" type="password" error="" />
        <div className={styles.checkbox}>
          <input type="checkbox" className={styles.checkboxInput} id="seller" />
          <label htmlFor="seller" className={styles.checkboxLabel}>
            Войти как продавец
          </label>
        </div>
      </fieldset>
      <p className={styles.requestError}>{requestError}</p>
      <SolidButton type="submit">Войти</SolidButton>
    </form>
  );
};

export default LoginForm;
