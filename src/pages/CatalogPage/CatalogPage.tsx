import FilterBar from 'src/components/FilterBar/FilterBar';
import styles from './CatalogPage.module.scss';

const CatalogPage = () => {
  return (
    <main className={styles.catalogPage}>
      <h2 className={styles.title}>Каталог</h2>
      <section className={styles.products}>
        <FilterBar />
      </section>
    </main>
  );
};

export default CatalogPage;
