import { ToastContainer } from "react-toastify";
import { TodoComponent } from "./components/TodoComponent";
import { TodoProvider } from "./contexts/handleTodo";
import 'react-toastify/dist/ReactToastify.css';


export function App() {
  return (
    <TodoProvider>
      <TodoComponent />
      <ToastContainer autoClose={3000} />
    </TodoProvider>
  );
}

