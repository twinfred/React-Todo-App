import { iTask } from '../ToDoList/ToDoList';
import { formatDate } from '../../utils/dates';

import './ToDoItem.scss';

interface iToDoItem extends iTask {
  onChange: () => void;
  isOverdue: boolean;
}

function ToDoItem({ id, description, isComplete, dueDate, onChange, isOverdue }: iToDoItem) {
  const formattedDate = dueDate && formatDate(dueDate);

  return (
    <label>
      <div className={`todo-item ${isOverdue ? 'overdue' : ''} ${isComplete ? 'complete' : ''}`}>
        <input className="todo-item__checkbox" type="checkbox" id={`task${id}`} defaultChecked={isComplete} onChange={onChange} />
        <p className="todo-item__description">{description}</p>
        {formattedDate && <p className="todo-item__date">
          <span className="sr-only">Due Date: </span>{formattedDate}
        </p>}
        {isOverdue && <p className="sr-only">This item is overdue</p>}
        {isComplete && <p className="sr-only">This item has been completed</p>}
      </div>
    </label>
  )
};

export default ToDoItem;