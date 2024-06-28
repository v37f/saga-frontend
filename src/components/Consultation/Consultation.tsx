import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './Consultation.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { FormEvent, useState } from 'react';
import ConsultationResult from './ConsultationResult/ConsultationResult';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import RefreshIcon from 'src/assets/images/components/refresh.svg';

type TConsultationStepType = 'inputData' | 'result';

const Consultation = () => {
  const [currentStep, setCurrentStep] =
    useState<TConsultationStepType>('inputData');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentStep('result');
  };

  return (
    <section className={styles.consultation}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h3 className={styles.title}>
          {currentStep === 'inputData' ? 'Заполните форму' : 'Вводные данные'}
        </h3>
        <fieldset className={styles.inputs} disabled={currentStep === 'result'}>
          <InputTypeText label="Фамилия Имя/Псевдоним художника" />
          <InputTypeText type="number" label="Высота, см" />
          <InputTypeText type="number" label="Ширина, см" />
          <InputTypeText type="number" label="Год создания" />
        </fieldset>
        {currentStep === 'inputData' && (
          <SolidButton type="submit">Оценить</SolidButton>
        )}
      </form>
      {currentStep === 'inputData' ? (
        <div className={styles.banner} />
      ) : (
        <ConsultationResult price={350000} />
      )}
      {currentStep === 'result' && (
        <div className={styles.refresh}>
          <OutlinedButton onClick={() => setCurrentStep('inputData')}>
            <RefreshIcon />
            Оценить другой арт-объект
          </OutlinedButton>
        </div>
      )}
    </section>
  );
};

export default Consultation;
