import { type Task } from "../types/task";
import { useTasks } from "../hooks/task";
import { useModal } from "../hooks/modal";
import { Calendar, Tag, Trash2, Pencil, Hash } from "lucide-react";
import EditTask from "./EditTask";

interface TaskDetailProps {
  task: Task;
}

export default function TaskDetail({ task }: TaskDetailProps) {
  const { deleteTask } = useTasks();
  const { setModal, closeModal } = useModal();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      deleteTask(task.id);
      closeModal();
    }
  };

  const handleEdit = () => {
    setModal(<EditTask task={task} />);
  };

  return (
    <div className="flex flex-col gap-6">
      
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-blue-600">
          <Tag size={16} />
          <span className="text-xs font-bold uppercase tracking-wider">
            {task.status}
          </span>
        </div>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          {task.title}
        </h1>
      </div>

      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
        <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Description</h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {task.description || "No description provided for this task."}
        </p>
      </div>

      {/* Meta Information */}
      <div className="grid grid-cols-2 gap-4 py-2">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Hash size={18} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400">Task ID</p>
            <p className="text-sm font-mono tracking-tighter">...{task.id.slice(-8)}</p>
          </div>
        </div>
        
        
        <div className="flex items-center gap-3 text-gray-500">
          <div className="p-2 bg-gray-100 rounded-lg">
            <Calendar size={18} />
          </div>
          <div>
            <p className="text-[10px] uppercase font-bold text-gray-400">Created</p>
            <p className="text-sm">Today</p>
          </div>
        </div>
      </div>

      <hr className="border-gray-100" />

      
      <div className="flex gap-3">
        <button
          onClick={handleEdit}
          className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3 rounded-xl hover:bg-gray-800 transition-all active:scale-95"
        >
          <Pencil size={18} />
          Edit Task
        </button>
        <button
          onClick={handleDelete}
          className="px-4 flex items-center justify-center text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          title="Delete Task"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
}