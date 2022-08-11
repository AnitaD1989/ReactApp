import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const  Favorite = () => {
  return (
    <div className= {styles.wrapper}>
      <div className={ styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <p className={styles.subtitle}>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
}

export default Favorite;


