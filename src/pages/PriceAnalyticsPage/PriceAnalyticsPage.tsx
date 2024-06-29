import InputTypeSearch from 'src/ui/inputs/InputTypeSearch/InputTypeSearch';
import styles from './PriceAnalyticsPage.module.scss';
import SolidButton from 'src/ui/buttons/SolidButton/SolidButton';
import { useAppSelector } from 'src/service/hooks';
import { getCurrentUserData } from 'src/service/slices/currentUserSlice';
import SubscriptionOffer from 'src/components/SubscriptionOffer/SubscriptionOffer';
import { FormEvent, useState } from 'react';
import PriceAnalyticsResult from 'src/components/PriceAnalyticsResult/PriceAnalyticsResult';
import { auctionsMockData } from 'src/utils/mock/auctionsMockData';
import { IAuctionResultType } from 'src/utils/types';

type TPriceAnalyticsStepType = 'inputData' | 'result';

const PriceAnalyticsPage = () => {
  const currentUser = useAppSelector(getCurrentUserData);
  const [currentStep, setCurrentStep] =
    useState<TPriceAnalyticsStepType>('inputData');

  const [searchResult, setSearchResult] = useState<IAuctionResultType[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const keyword = inputValue.trim().toLowerCase();
    const result = auctionsMockData.filter((item) => {
      return (
        item.product.titleArt.toLowerCase().includes(keyword) ||
        item.product.artist.lastnameArtist
          .concat(
            ' ',
            item.product.artist.nameArtist,
            ' ',
            item.product.artist.lastnameArtist
          )
          .toLowerCase()
          .includes(keyword)
      );
    });

    setSearchResult(result);
    setCurrentStep('result');
  };
  return (
    <main className={styles.priceAnalyticsPage}>
      <h2 className={styles.title}>Şagaart Аналитика цен</h2>
      <p className={styles.subtitle}>
        Безлимитный доступ к результатам аукционов
      </p>
      <form className={styles.search} onSubmit={handleSearchSubmit}>
        <div className={styles.input}>
          <InputTypeSearch
            placeholder="Поиск по имени художника, названию работы"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className={styles.button}>
          <SolidButton type="submit">Искать</SolidButton>
        </div>
      </form>
      {!currentUser.subscription && currentStep === 'inputData' && (
        <SubscriptionOffer />
      )}
      {currentStep === 'result' && (
        <PriceAnalyticsResult
          items={searchResult}
          onGetSubClick={() => {
            setCurrentStep('inputData');
          }}
        />
      )}
    </main>
  );
};

export default PriceAnalyticsPage;
