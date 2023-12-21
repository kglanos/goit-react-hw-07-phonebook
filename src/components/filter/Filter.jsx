import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/filterSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    dispatch(filterContact(e.target.value));
  };

  return (
    <div className={css.filter}>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        name="filter"
        onChange={onFilterChange}
        className={css.filter__input}
      ></input>
    </div>
  );
};