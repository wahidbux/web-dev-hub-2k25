import { IToDoItem } from "../../shared/interfaces/ToDo";
import "./ToDo.css";

interface IToDoProps extends IToDoItem {
  handleCompletedChange: (taskId: number) => void;
}

const ToDo = ({
  userId,
  id,
  title,
  completed,
  handleCompletedChange,
}: IToDoProps) => {
  return (
    <div className="task">
      <p className="text">{title}</p>

      {completed ? (
        <button
          className="btn undo"
          onClick={() => {
            handleCompletedChange(id);
          }}
        >
          Undo
        </button>
      ) : (
        <button
          className="btn complete"
          onClick={() => {
            handleCompletedChange(id);
          }}
        >
          Complete
        </button>
      )}
    </div>
  );
};

export default ToDo;
