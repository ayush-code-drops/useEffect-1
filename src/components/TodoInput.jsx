import { useState } from "react";

function TodoInput({ onSubmit }) {
  const [state, setState] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e) => {
    // console.log(e.target.value,e.target.name)
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    onSubmit(state);
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="title"
          name="title"
          value={state.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="description"
          value={state.description}
          name="description"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleClick}>Add</button>
    </>
  );
}

export default TodoInput;
