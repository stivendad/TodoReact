import {AiOutlineCheck, AiTwotoneDelete} from 'react-icons/ai'
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={props.completeTodo}
      >
        <AiOutlineCheck />
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span
        className="Icon Icon-delete"
        onClick={props.deleteTodo}
      >
        <AiTwotoneDelete />
      </span>
    </li>
  );
}

export default TodoItem ;