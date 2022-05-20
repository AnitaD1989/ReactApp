import styles from './List.module.scss';
import Column from '../Column/Column.js';

const List = () => {
  const columns = [
  	{ id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
  ];
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
      <p className={styles.description}>Intresting things I want to chek out!</p>
      <section className={styles.colums}>
        {columns.map(column => 
          <Column key={column.id} title={column.title} icon={column.icon} />)}
      </section>
    </div>
  );
};
export default List;
