import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditablePage from "./pages/EditablePage";
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome Draggable Page!</h1>
      <DndProvider backend={HTML5Backend}>
        <EditablePage />
      </DndProvider>
    </div>
  );
}
