import { Context, createContext, useState } from "react";
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error,
      } = useLocalStorage('TODOS_V1', [])
    
      const [searchValue, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false);
    
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if(!searchValue.length >= 1){
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return todoText.includes(searchText);
        })
      }

      const addTodo = (text) => {
        const newTodo = [...todos];
        newTodo.push({
          completed: false,
          text: text,
        });
    
        saveTodos(newTodo);
      }
    
      const completeTodo = (text) => {
        const newTodos = todos.filter(todo => {
          if(todo.text === text){
            return todo.completed = true;
          } else {
            return todo
          }
        })
    
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = todos.filter(todo => {
          if(todo.text !== text){
            return todo;
          }
        })
    
        saveTodos(newTodos);
      }


    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
        );
}

export {TodoContext, TodoProvider};
