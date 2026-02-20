import { type Task } from "../types/task";
import TaskCard from "./../components/Task";


interface ColumnProps {
  title: string;
  bgColor: string;
  tasks: Task[];
}

const Column = ({ title, bgColor, tasks }: ColumnProps) => {
  return (
    <div className={`${bgColor} flex-1 min-w-[300px] p-5 rounded-2xl shadow-md min-h-[70vh] max-h-[70vh] flex flex-col`}>
      {/* Header */}
      <h2 className="text-lg font-black mb-5 uppercase tracking-wider text-gray-700 border-b border-black/10 pb-2 flex justify-between items-center">
        {title} 
        <span className="text-sm bg-black/5 px-2 py-1 rounded-lg">{tasks.length}</span>
      </h2>
      
      {/* Scrollable Task List */}
      <div className="flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}/>
        ))}
        
        {tasks.length === 0 && (
          <div className="border-2 border-dashed border-black/10 rounded-xl p-8 text-center text-gray-500">
            No tasks here
          </div>
        )}
      </div>

     
    </div>
  );
};

export default Column;