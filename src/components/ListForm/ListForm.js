import { useState } from 'react';
import Button from './../Button/Button';
import { useDispatch } from 'react-redux'
import { addList } from '../../redux/listsRedux';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';

const ListForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList({title, description}));
    setTitle('');
    setDescription('');
  }

  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      Description: <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <Button>Add List</Button>
    </form>
  );
};

export default ListForm;


