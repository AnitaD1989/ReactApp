import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { useState } from 'react';
import {shortid} from 'shortid';

const List = () => {

  const [columns, setColumns] = useState([
  	{ id: 1, title: 'Books', icon: 'book' },
    { id: 2, title: 'Movies', icon: 'film' },
    { id: 3, title: 'Game', icon: 'gamepad' }
  ]);
  
  const addColumn = newColumn  => {
    setColumns([...columns, { id: shortid, title: newColumn }]);
  };
  

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
      <ColumnForm action={addColumn}/>
    </div>
  );
};
export default List;
