import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './Consultation.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { useState } from 'react';
import ConsultationResult from './ConsultationResult/ConsultationResult';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import RefreshIcon from 'src/assets/images/components/refresh.svg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type TConsultationStepType = 'inputData' | 'result';

type ConsultationInputs = {
  artistName: string;
  heightCm: number;
  widthCm: number;
  yearOfCreation: number;
};
const currentYear = Number(new Date().getFullYear());
const consultationSchema = yup.object({
  artistName: yup.string().required('Введите имя художника'),
  heightCm: yup
    .number()
    .typeError('Укажите высоту')
    .required('Укажите высоту')
    .min(1, 'Минимальная высота 1 см.')
    .max(1000, 'Максимальная высота 1000 см.'),
  widthCm: yup
    .number()
    .typeError('Укажите ширину')
    .required()
    .min(1, 'Минимальная ширина 1 см.')
    .max(1000, 'Максимальная ширина 1000 см.'),
  yearOfCreation: yup
    .number()
    .typeError('Укажите год создания')
    .required()
    .min(1, 'Минимально возмозжный год: 1')
    .max(currentYear, `Максимально возмозжный год: ${currentYear}`),
});

const Consultation = () => {
  const [currentStep, setCurrentStep] =
    useState<TConsultationStepType>('inputData');

  const onSubmit: SubmitHandler<ConsultationInputs> = () => {
    setCurrentStep('result');
  };

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ConsultationInputs>({
    mode: 'all',
    resolver: yupResolver(consultationSchema),
    defaultValues: {
      artistName: '',
      heightCm: 100,
      widthCm: 100,
      yearOfCreation: 2024,
    },
  });

  return (
    <section className={styles.consultation}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        spellCheck={false}
      >
        <h3 className={styles.title}>
          {currentStep === 'inputData' ? 'Заполните форму' : 'Вводные данные'}
        </h3>
        <fieldset className={styles.inputs} disabled={currentStep === 'result'}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                label="Фамилия Имя/Псевдоним художника"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.artistName?.message}
                placeholder="Введите имя художника"
              />
            )}
            name="artistName"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Высота, см"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.heightCm?.message}
              />
            )}
            name="heightCm"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Ширина, см"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.widthCm?.message}
              />
            )}
            name="widthCm"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Год создания"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.yearOfCreation?.message}
                maxLength={4}
              />
            )}
            name="yearOfCreation"
          />
        </fieldset>
        {currentStep === 'inputData' && (
          <SolidButton type="submit" disabled={!isValid}>
            Оценить
          </SolidButton>
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
