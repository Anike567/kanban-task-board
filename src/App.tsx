import KanbanBoard from "./../screen/Kanban";
import { TaskProvider } from "../context/TaskContex";
import { ModalProvider } from "../context/ModalContext";
function App() {
  return (
    <TaskProvider>
      <ModalProvider>
        <KanbanBoard />
      </ModalProvider>
    </TaskProvider>

  )
}

export default App
