import { createContext, KeyboardEvent, ReactNode, useContext, useEffect, useState } from "react";

interface TodoProviderProps {
  children: ReactNode;
}

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

interface TodoContextData {
  task: Task[];
  newTaskTitle: string;
  filter: string;
  setTask: (value: []) => void;
  setNewTaskTitle: (value: string) => void;
  setFilter: (value: string) => void;
  handleCreateNewTask: (e: KeyboardEvent) => void;
  handleCompleteTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
  handleDeleteCompleteTask: () => void;
}

const TodoContext = createContext<TodoContextData>({} as TodoContextData);

export function TodoProvider({ children }: TodoProviderProps) {
  const [task, setTask] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const initialTasks = [
      {id: 1, title: 'Complete online JavaScript course', isComplete: true},
      {id: 2, title: 'Jog around the park 3x', isComplete: false},
      {id: 3, title: '10 minutes meditation', isComplete: false},
      {id: 4, title: 'Read for 1 hour', isComplete: false},
      {id: 5, title: 'Pick up groceries', isComplete: false},
      {id: 6, title: 'Complete Todo App on Frontend Mentor', isComplete: false}
    ];

    const tasks = JSON.parse(localStorage.getItem('tasks') || JSON.stringify(initialTasks));

    setTask(tasks)
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task));
  }, [task])

  function handleCreateNewTask(e: KeyboardEvent) {
    if(e.key === 'Enter') {
      if(!newTaskTitle.trim()) {
        return setNewTaskTitle('');
      }
  
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        title: newTaskTitle,
        isComplete: false
      }
  
      if(task.length === 0) {
        setTask([newTask]);
        return setNewTaskTitle('');
      }
  
      setTask(oldState => [...oldState, newTask]);
  
      setFilter('All')
      setNewTaskTitle('');
    }
  }

  function handleCompleteTask(id: number) {
    const newTask = task.map(tasks => tasks.id === id ? {
      ...tasks,
      isComplete: !tasks.isComplete
    }: tasks)

    setTask(newTask);
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = task.filter(tasks => tasks.id !== id);
    
    setTask(filteredTasks);
  }

  function handleDeleteCompleteTask() {
    const filteredTasks = task.filter(tasks => tasks.isComplete !== true);

    setTask(filteredTasks);
    setFilter('All');
  }

  return (
    <TodoContext.Provider 
      value={
        {
          task,
          filter,
          setTask,
          setFilter,
          newTaskTitle,
          setNewTaskTitle,
          handleDeleteTask,
          handleCompleteTask, 
          handleCreateNewTask, 
          handleDeleteCompleteTask
        }
      }
    >
      {children}
    </TodoContext.Provider>
  )
}

export function useHandleTodo() {
  const context = useContext(TodoContext);

  return context;
}