import {useContext, useState} from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css'

const TodoSearch = () => {
  const {searchValue, setSearchValue} = useContext(TodoContext);

  const onSearchValueChange = ({target}) => {
    setSearchValue(target.value);
  };

  return (
    <input 
      className="TodoSearch" 
      placeholder='Cebolla'
      value={searchValue}
      onChange={onSearchValueChange} 
    />
  )
}

export default TodoSearch