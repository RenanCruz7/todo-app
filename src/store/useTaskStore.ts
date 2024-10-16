import  {create,SetState}  from 'zustand';

interface Task {
    title: string;
    description: string;
}

interface TaskStore {
    tasks: Task[];
    addTask: (task: Task) => void;
}

export const useTaskStore = create<TaskStore>((set: SetState<TaskStore>) => ({
    tasks: [],
    addTask: (task: Task) => set((state: TaskStore) => ({ tasks: [...state.tasks, task] })),
}));