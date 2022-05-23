import styles from './List.module.scss';
import Column from '../Column/Column.js';
import { useState } from 'react';
import {shortid} from 'react';

const List = () => {

  const [columns, setColumns] = useState([
  	{ id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Games', icon: 'gamepad' }
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    setColumns([...columns, { id: shortid(), title: value }]);
    setValue('');
  };

  const [value, setValue] = useState('');

  return (
    <div className={styles.list}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange/>
        <button>Add column</button>
      </form>
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
