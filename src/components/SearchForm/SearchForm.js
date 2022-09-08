import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import {updateSearchTerm} from '../../redux/searchTermRedux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    dispatch(updateSearchTerm(searchValue));
  }, [dispatch, searchValue]);
  const handleSubmit = (e)=> {
    e.preventDeafult();
    dispatch(updateSearchTerm(searchValue));
    setSearchValue('');
  };

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <TextInput placeholder = "Search..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <Button>
          <span className="fa fa-search"/>
        </Button>
      </form>
  );
};

export default SearchForm;

