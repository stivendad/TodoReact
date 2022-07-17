
import { TodoProvider, TodoContext } from '../TodoContext';
import TodoCounter from '../components/TodoCounter';
import TodoSearch from '../components/TodoSearch';
import TodoList from '../components/TodoList';
import TodoItem from '../components/TodoItem';
import CreateTodoButton from '../components/CreateTodoButton';
import {Modal} from '../components/Modal'
import TodoForm from '../components/TodoForm';
import {TodosError} from '../components/TodosError';
import {TodosLoading} from '../components/TodosLoading';
import {EmptyTodos} from '../components/EmptyTodos';

import './App.css'



function App() {
  return (
    <TodoProvider>
      <TodoCounter />
      <TodoSearch />
      <TodoContext.Consumer>
        {({ error, loading, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal}) => (
          <>
            <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}
    
            {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text} 
                  completed={todo.completed} 
                  completeTodo={() => completeTodo(todo.text)} 
                  deleteTodo={() => deleteTodo(todo.text)}
                />
            ))}
          </TodoList>
          {!!openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          )}
          <CreateTodoButton 
            setOpenModal={setOpenModal}
          />
        </>
        )}
      </TodoContext.Consumer>

    </TodoProvider>
  );
}

export default App
