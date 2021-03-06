import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/store';

  
const Column = props => {
  //const searchTerm = useSelector((state) => state.searchTerm);
  const cards = useSelector((state) => getFilteredCards(state, props.id));
  //const cards = useSelector((state) => state.cards).filter((card) => card.columnId === props.id && card.title?.toLowerCase().includes(searchTerm?.toLowerCase()));
  console.log('Column render');
  
  return (
    <article className={styles.column}>
      <h2 className={styles.title}><span className={styles.icon + ' fa fa-' + props.icon}/>{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} columnId={card.columnId} title={card.title}/>))}
      </ul>
      <CardForm columnId = {props.columnId}/>
    </article>
  );
};

export default Column;
