import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm.js';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store.js';

const List = () => {

  const columns = useSelector(getAllColumns);
  
  
  /*const addColumn = newColumn  => {
    setColumns([...columns, { id: shortid(), title: newColumn.title , icon: newColumn.icon, cards:[]}]);
  };
  
  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
      else
        return column
    })
  
    setColumns(columnsUpdated);
  
  };*/

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do <span>soon</span></h2>
      </header>
      <p className={styles.description}>Intresting things I want to chek out!</p>
      <section className={styles.columns}>
        {columns.map(column => 
          <Column key={column.id} {...column}/>)}
      </section>
      <ColumnForm/>
      <CardForm/>
    </div>
  );
};
export default List;
