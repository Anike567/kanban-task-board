import { type Task } from "./../types/task";
import { type ReactNode } from "react";
import { Trash2, Pencil } from "lucide-react";
import { useTasks } from "../hooks/task";
import { useModal } from "../hooks/modal";
import EditTask from "./EditTask";

interface TaskCardProps {
    task: Task;
}

export default function TaskCard({ task }: TaskCardProps): ReactNode {
    const { deleteTask } = useTasks();
    const { setModal } = useModal();

    return (
        <div className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 w-full flex-shrink-0 min-w-0 overflow-hidden">

            <div className="flex justify-between items-start gap-3">
                <div className="min-w-0 flex-1">
                    <p className="text-gray-800 font-bold leading-tight break-words whitespace-normal">
                        {task.title.length > 100 
                            ? `${task.title.slice(0, 100)}...` 
                            : task.title}
                    </p>
                </div>

                <div className="flex gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => setModal(<EditTask task={task} />)}
                        className="p-1.5 hover:bg-blue-50 text-gray-400 hover:text-blue-600 rounded-lg transition-colors"
                    >
                        <Pencil size={14} />
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded-lg transition-colors"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>

          
            <p className="text-xs text-gray-500 mt-2 line-clamp-3 leading-relaxed break-words">
                {task.description}
            </p>

            <div className="mt-4 pt-3 border-t border-gray-50">
                <span className="text-[10px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
                    ID: ...{task.id.slice(-6)}
                </span>
            </div>
        </div>
    );
}