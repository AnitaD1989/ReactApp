import styles from './List.module.scss';
import Column from '../Column/Column.js';

const List = () => {
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
      <p className={styles.description}>Intresting things I want to chek out!</p>
      <section className={styles.colums}>
        <Column title="Books" span ='fa-fa-book'/>
        <Column title="Movies" span = 'fa-fa-film'/>
        <Column title="Games" span ='fa-fa-gamepad' />
      </section>
    </div>
  );
};
export default List;
