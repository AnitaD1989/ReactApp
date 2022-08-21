import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorites = () => {

  const cards = useSelector(getFavoriteCards);

  if(!cards.length) return <div className={styles.no_cards}>no cads...</div>
  return (
    <div className={styles.favorites}>
      <PageTitle>Favorites</PageTitle>
      <ul className={styles.column}>
        {cards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
      </ul>
    </div>
  )
}

export default Favorites;