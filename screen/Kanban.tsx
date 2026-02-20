import Column from "./../components/Column";
import { useTasks } from './../hooks/task';
import { Status, type Task } from "../types/task";
import { Plus } from "lucide-react";
import { useModal } from "./../hooks/modal";
import Modal from "./../components/Modal";
import Addtask from "./../components/Addtask";


const KanbanParallel = () => {
    const { tasks } = useTasks();
    const todoTasks: Task[] = tasks.filter((task) => task.status === Status.Todo);
    const inProgressTasks: Task[] = tasks.filter((task) => task.status === Status.InProgress);
    const doneTasks: Task[] = tasks.filter((task) => task.status === Status.Done);

    const { closeModal, setModal, content } = useModal();
    const handleAddTask = () => {
        setModal(<Addtask />)
    }
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            {
                content && (
                    <Modal
                        onClose={closeModal}
                        children={content}
                    />
                )
            }

            <h1 className="text-3xl font-extrabold mb-10 text-center text-gray-900 tracking-tight">
                Project Dashboard
            </h1>

            <div className="flex flex-row gap-6 items-start h-full overflow-x-auto pb-6 px-2 custom-scrollbar">

                <Column
                    title="To Do"
                    bgColor="bg-slate-200"
                    tasks={todoTasks}
                />

                <Column
                    title="In Progress"
                    bgColor="bg-blue-200"
                    tasks={inProgressTasks}
                />

                <Column
                    title="Done"
                    bgColor="bg-emerald-200"
                    tasks={doneTasks}
                />

            </div>

            {/* Add Task Button at Bottom */}
            <div className="footer max-w-[200px] mx-[auto]">
                <button
                    onClick={handleAddTask}
                    className="mt-4 w-full py-3 border-2 border-dashed border-black/10 rounded-xl flex items-center justify-center gap-2 text-gray-600 hover:bg-black/5 hover:border-black/20 transition-all font-semibold group"
                >
                    <Plus size={18} className="group-hover:scale-110 transition-transform" />
                    Add New Task
                </button>
            </div>
        </div>
    );
};

export default KanbanParallel;