import { TodoComponent } from "./components/TodoComponent";
import { TodoProvider } from "./contexts/handleTodo";


export function App() {
  return (
    <TodoProvider>
      <TodoComponent />
    </TodoProvider>
  );
}

