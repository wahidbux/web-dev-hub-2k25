import { useEffect, useMemo, useState } from "react";
import { IToDoItem, IUser, TOrder } from "../../shared/interfaces/ToDo";
import ToDo from "../ToDo/ToDo";
import "./ToDos.css";

const ToDos = () => {
  const [todos, setTodos] = useState<IToDoItem[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<number>();
  const [sortOrderPending, setSortOrderPending] = useState<TOrder>();

  const baseUrl = "https://jsonplaceholder.typicode.com";

  const pendingTasks = useMemo(() => {
    return todos.filter((item) => !item.completed);
  }, [todos]);
  const completedTasks = useMemo(() => {
    return todos.filter((item) => item.completed);
  }, [todos]);

  const fetchTodos = async () => {
    try {
      const response = await fetch(baseUrl + "/todos");

      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(baseUrl + "/users");

      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTodosByUser = async (userId: number) => {
    try {
      const response = await fetch(baseUrl + `/users/${userId}/todos`);

      const data = await response.json();
      console.log(data);
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
    fetchUsers();
  }, []);

  const handleCompletedChange = (taskId: number) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === taskId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });

    setTodos(updatedTodos);
  };

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUser(Number(event.target.value));
    fetchTodosByUser(Number(event.target.value));
  };

  const handleSortChangePending = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSortOrderPending(event.target.value as TOrder);
  };

  const sortedPendingTasks = useMemo(() => {
    return [...pendingTasks].sort((a, b) =>
      sortOrderPending === "asc"
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );
  }, [pendingTasks, sortOrderPending]);

  const displayPendingTasks = sortedPendingTasks.map((item) => {
    return <ToDo {...item} handleCompletedChange={handleCompletedChange} />;
  });
  const displayCompletedTasks = completedTasks.map((item) => {
    return <ToDo {...item} handleCompletedChange={handleCompletedChange} />;
  });

  return (
    <div className="todos-app">
      <div className="container-outer">
        <div className="filters">
          <div className="select-container">
            <label htmlFor="select" className="select-label">
              Filter by:
            </label>
            <select
              id="select"
              value={selectedUser || ""}
              onChange={handleUserChange}
              className="select-dropdown"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <div className="select-container">
            <label htmlFor="select" className="select-label">
              Sort:
            </label>
            <select
              id="sort-select-pending"
              value={sortOrderPending}
              onChange={handleSortChangePending}
              className="select-dropdown"
            >
              <option value="asc">Title (asc)</option>
              <option value="desc">Title (desc)</option>
            </select>
          </div>
        </div>
        <div className="todos">
          <div className="container">
            <p>Pending</p>
            {displayPendingTasks ? displayPendingTasks : <p>no tasks</p>}
          </div>
          <div className="container">
            <p>Completed</p>
            {displayCompletedTasks ? displayCompletedTasks : <p>no tasks</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDos;
