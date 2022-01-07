import { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Pagination from "./Pagination";
import axios from "axios";
function Todo() {
  const [list, setList] = useState([]);
  const [showcompleted, setShowCompleted] = useState(false);
  const [page, setPage] = useState(1);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = ({ title, description }) => {
    const payload = {
      id: list.length + 1,
      title,
      description,
      status: list.length % 2 === 0 ? true : false
    };
    setList([...list, payload]);
  };

  useEffect(() => {
    setLoad(true);
    axios
      .get("https://json-server-mocker-masai.herokuapp.com/tasks")
      .then((data) => {
        setLoad(false);
        setList(data.data);
      })
      .catch(() => {
        setError(true);
      });
  }, []);
  if (error) {
    return <div>Error</div>;
  }
  if (load) {
    return <div>...loading</div>;
  }
  const style1 = {
    margin: "24px",
    backgroundColor: "red",
    color: "white",
    marginLeft: "40px"
  };
  const handleDelete = (id) => {
    const updlist = list.filter((item) => item.id !== id);
    setList(updlist);
  };
  const perPage = 3;
  const paginatedResults = list.filter(
    (_, i) => i >= (page - 1) * perPage && i <= page * perPage - 1
  );

  return (
    <div>
      <TodoInput onSubmit={handleSubmit} />

      <TodoList data={paginatedResults} handleDelete={handleDelete} />
      {/* <TodoList
        data={list.filter((item) => !item.status)}
        handleDelete={handleDelete}
      /> */}

      <button
        style={style1}
        onClick={() => {
          setShowCompleted(!showcompleted);
        }}
      >
        Show toggle complete
      </button>

      {showcompleted && (
        <TodoList
          data={list.filter((item) => item.status)}
          handleDelete={handleDelete}
        />
      )}

      <div>
        <Pagination
          total={5}
          currentPage={page}
          onClickCallback={(page) => setPage(page)}
        />
      </div>
    </div>
  );
}

export default Todo;
