import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from './../Button/Button';
import { useDispatch } from 'react-redux'
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();
  const listId = props.listId;
  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addColumn({title,icon, listId }));
    setTitle('');
    setIcon('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className = {styles.ColumnForm}>
        <span>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></span>
        <span>Icon: <input type="text" value={icon} onChange={e => setIcon(e.target.value)} /></span>
        <Button>Add column</Button>
        </div>
    </form>
  );
};

export default ColumnForm;


