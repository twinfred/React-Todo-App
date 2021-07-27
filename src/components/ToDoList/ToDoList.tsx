import { useState, useEffect } from 'react';
import { getTasks, patchTaskById } from './../../apis/taskApi';
import ToDoItem from '../ToDoItem/ToDoItem';
import Loading from '../Loading/Loading';

import './ToDoList.scss';

export interface iTask {
  id: number;
  description: string;
  isComplete: boolean;
  dueDate?: string;
}

interface iTasks extends Array<iTask> { };

const isOverdue = (date: string | undefined, isComplete: boolean): boolean => {
  if (!date || isComplete) return false;

  const now = new Date();
  const dateString = new Date(date);

  return now > dateString;
}

const sortTasks = (tasks: iTasks): iTasks => {
  let sortedTasks = tasks.reduce((accumulator: iTasks[], currentValue: iTask) => {
    const isTaskOverdue = isOverdue(currentValue.dueDate, currentValue.isComplete);

    if (isTaskOverdue) {
      accumulator[0].push(currentValue);
    } else if (!currentValue.isComplete && !isTaskOverdue) {
      accumulator[1].push(currentValue);
    } else {
      accumulator[2].push(currentValue);
    }

    return accumulator;
  }, [[], [], []]);

  const sortByDueDate = (tasks: iTasks): iTasks => {
    return tasks.sort((a, b) => {
      if (a.dueDate && b.dueDate) return Date.parse(a.dueDate) - Date.parse(b.dueDate);
      if (a.dueDate) return -1;
      if (b.dueDate) return 1;
      return 0;
    });
  };

  return [...sortByDueDate(sortedTasks[0]), ...sortByDueDate(sortedTasks[1]), ...sortByDueDate(sortedTasks[2])];
};

function ToDoList() {
  const [tasks, setTasks] = useState<iTasks>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getTasks().then(tasks => {
      setIsLoading(false);
      setTasks(sortTasks(tasks));
    });
  }, []);

  const updateTask = (id: number, index: number) => () => {
    setIsLoading(true);

    const newTasks = tasks;
    const isComplete = !newTasks[index].isComplete;
    newTasks[index].isComplete = isComplete;

    patchTaskById(id, { isComplete }).then(response => {
      if (response.status === 'success') setTasks(sortTasks(newTasks));

      setIsLoading(false);
    });
  }

  return (
    <main className="todo-list">
      {isLoading && <Loading />}
      {tasks.length ? tasks.map((task, index) => (
        <ToDoItem
          key={task.id}
          {...task}
          onChange={updateTask(task.id, index)}
          isOverdue={isOverdue(task.dueDate, task.isComplete)}
        />
      )) : null}
    </main>
  );
}

export default ToDoList;