import { useState } from "react";
import { useTasks } from "./../hooks/task";
import { Status, type StatusType } from "../types/task";
import { ChevronDown } from "lucide-react"; 
import { useModal } from "../hooks/modal";

export default function AddTask() {
    const { addTask } = useTasks();
    const{closeModal} = useModal();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState<StatusType>(Status.Todo);
    const onComplete = ()=>{
        closeModal();
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) return;

        // Now passing all three fields to the context
        addTask({
            title: title.trim(),
            description: description.trim(),
            status: status 
        });

        // Reset fields
        setTitle("");
        setDescription("");
        setStatus(Status.Todo);
        if (onComplete) onComplete();
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Title Input */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Task Title</label>
                <input
                    autoFocus
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Design Landing Page"
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    required
                />
            </div>

            {/* Description Input */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What needs to be done?"
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                />
            </div>

            {/* Status Dropdown */}
            <div className="flex flex-col gap-1.5">
                <label className="text-sm font-bold text-gray-700 ml-1">Initial Status</label>
                <div className="relative">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value as StatusType)}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all appearance-none cursor-pointer text-gray-700"
                    >
                        <option value={Status.Todo}>To Do</option>
                        <option value={Status.InProgress}>In Progress</option>
                        <option value={Status.Done}>Done</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
            >
                Create Task
            </button>
        </form>
    );
}