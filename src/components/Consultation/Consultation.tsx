import InputTypeText from 'src/ui/inputs/InputTypeText/InputTypeText';
import styles from './Consultation.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { ChangeEvent, useState } from 'react';
import ConsultationResult from './ConsultationResult/ConsultationResult';
import OutlinedButton from 'src/ui/buttons/OutlinedButton/OutlinedButton';
import RefreshIcon from 'src/assets/images/components/refresh.svg';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputTypeDropdown from 'src/ui/inputs/InputTypeDropdown/InputTypeDropdown';
import { ALL_SHOWS } from 'src/utils/constants';
import InputTypeRadiobutton from 'src/ui/inputs/InputTypeRadiobutton/InputTypeRadiobutton';
import { getArtPrice } from 'src/api/api';

type TConsultationStepType = 'inputData' | 'result';

type ConsultationInputs = {
  country: string;
  height: number;
  width: number;
  year: number;
  age: number;
};
const currentYear = Number(new Date().getFullYear());
const consultationSchema = yup.object({
  country: yup.string().typeError('Укажите страну').required('Укажите страну'),
  height: yup
    .number()
    .typeError('Укажите высоту')
    .required('Укажите высоту')
    .min(1, 'Минимальная высота 1 см.')
    .max(1000, 'Максимальная высота 1000 см.'),
  width: yup
    .number()
    .typeError('Укажите ширину')
    .required()
    .min(1, 'Минимальная ширина 1 см.')
    .max(1000, 'Максимальная ширина 1000 см.'),
  year: yup
    .number()
    .typeError('Укажите год создания')
    .required()
    .min(1, 'Минимально возмозжный год: 1')
    .max(currentYear, `Максимально возмозжный год: ${currentYear}`),
  age: yup
    .number()
    .typeError('Укажите возраст')
    .required()
    .min(1, 'Минимально возмозжный возраст: 1 год')
    .max(130, `Максимально возмозжный возраст: 130 лет`),
});

const Consultation = () => {
  const [currentStep, setCurrentStep] =
    useState<TConsultationStepType>('inputData');
  const [soloShows, setSoloShows] = useState<string[]>([]);
  const [groupShows, setGroupShows] = useState<string[]>([]);
  const [artistSex, setArtistSex] = useState('М');
  const [evaluationResult, setEvaluationResult] = useState(0);
  const [requestError, setRequestError] = useState('');
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ConsultationInputs>({
    mode: 'all',
    resolver: yupResolver(consultationSchema),
    defaultValues: {
      country: '',
      height: 100,
      width: 100,
      year: 2024,
      age: 30,
    },
  });

  const onSubmit: SubmitHandler<ConsultationInputs> = (data) => {
    getArtPrice({
      ...data,
      soloShows,
      groupShows,
      artistSex,
    })
      .then((res) => {
        setEvaluationResult(res);
        setCurrentStep('result');
      })
      .catch((error) => setRequestError(error));
  };

  const onArtistSexChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArtistSex(e.target.value);
  };

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
                type="text"
                label="Страна"
                id="Страна"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.country?.message}
                placeholder="Введите название страны"
              />
            )}
            name="country"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Год создания"
                id="Год создания"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.year?.message}
                maxLength={4}
              />
            )}
            name="year"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Высота, см"
                id="Высота"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.height?.message}
              />
            )}
            name="height"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Ширина, см"
                id="Ширина"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.width?.message}
              />
            )}
            name="width"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputTypeText
                type="number"
                label="Возраст художника"
                id="Возраст"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                error={errors.age?.message}
              />
            )}
            name="age"
          />
        </fieldset>
        <div className={styles.artistSex}>
          <p className={styles.artistSexTitle}>Пол художника</p>
          <div className={styles.radioButtons}>
            <InputTypeRadiobutton
              label="Мужской"
              name="artistSex"
              value="М"
              checked={artistSex === 'М'}
              onChange={onArtistSexChange}
              disabled={currentStep === 'result'}
            />
            <InputTypeRadiobutton
              label="Женский"
              name="artistSex"
              value="Ж"
              checked={artistSex === 'Ж'}
              onChange={onArtistSexChange}
              disabled={currentStep === 'result'}
            />
          </div>
        </div>
        <div className={styles.dropdowns}>
          <InputTypeDropdown
            addScroll
            dropdownValue={soloShows}
            valueSetter={setSoloShows}
            label="Персональные выставки"
            options={ALL_SHOWS}
            disabled={currentStep === 'result'}
          />

          <InputTypeDropdown
            addScroll
            dropdownValue={groupShows}
            valueSetter={setGroupShows}
            label="Групповые выставки"
            options={ALL_SHOWS}
            disabled={currentStep === 'result'}
          />
        </div>
        {currentStep === 'inputData' && (
          <div className={styles.submit}>
            <p className={styles.requestError}>{requestError}</p>
            <SolidButton type="submit" disabled={!isValid}>
              Оценить
            </SolidButton>
          </div>
        )}
      </form>
      {currentStep === 'inputData' ? (
        <div className={styles.banner} />
      ) : (
        <ConsultationResult price={evaluationResult} />
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
