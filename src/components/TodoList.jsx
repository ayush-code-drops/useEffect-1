function TodoList({ data, handleDelete }) {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.title} | {item.description} | {item.status ? "Done" : "Pending"}
          <span></span> <button onClick={() => handleDelete(item.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
