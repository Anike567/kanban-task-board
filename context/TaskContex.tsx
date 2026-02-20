import type { Task} from '../types/task';
import { Status } from '../types/task';
import { createContext, useState,} from 'react';
import type { ReactNode } from 'react';

const defaultTasks: Task[] = [
  {
    id: crypto.randomUUID(),
    title: 'Setup Project',
    description: 'Configure Vite, Tailwind v4, and TypeScript',
    status: Status.Done
  },
  {
    id: crypto.randomUUID(),
    title: 'Design Kanban Board',
    description: 'Create the 3-column parallel grid layout',
    status: Status.InProgress
  },
  {
    id: crypto.randomUUID(),
    title: 'Clean up Types',
    description: 'Fix erasable syntax and use union types',
    status: Status.Done
  }
];

interface TaskContextType {
  tasks: Task[];
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (id: string, updates: Partial<Omit<Task, 'id'>>) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);

  const addTask = (newTask: Omit<Task, 'id'>) => {
    const task: Task = {
      ...newTask,
      id: crypto.randomUUID(),
      status: newTask.status || Status.Todo,
    };
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (id: string, updates: Partial<Omit<Task, 'id'>>) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};


export default TaskContext;