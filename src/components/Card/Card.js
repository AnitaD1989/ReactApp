import styles from './Card.module.scss';
import { useDispatch} from 'react-redux';
import { deleteCard, toggleCardFavorite} from '../../redux/store';
import clsx from 'clsx';

const Card = props => {

  const dispatch = useDispatch();

  const toggle = e => {
    e.preventDefault();
      dispatch(toggleCardFavorite({id: props.id, isFavorite:props.isFavorite}))
  }

  const handleDelete = e => {
      dispatch(deleteCard({id: props.id}))
  }
  
    
  return (
  <li className={styles.card}>{props.title}
    <div>
    <button onClick={toggle}>
          <span className={clsx(' fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
        </button>
        <button onClick={handleDelete}>
          <span className={'fa fa-trash'}></span>
        </button>
      {/* <i className={`fa ${props.isFavorite ? 'fa-star' : 'fa-star-o'} `} onClick={() => toggle(props.id)}></i>  */}
      {/*<i className="fa fa-trash" onClick={() => handleDelete(props.id)}></i> */}
    </div>
  </li>
  );
};

export default Card;