import { useRef, useState } from "react";
import { flushSync } from "react-dom";

const initialTodoLists = [];

for (let i = 0; i < 10; i++) {
  initialTodoLists.push(`Todo #${i}`);
}

function Todo() {
  const [text, setText] = useState("");
  const [todoLists, setTodoLists] = useState(initialTodoLists);
  const listRef = useRef(null);

  function handleAddTodo() {
    const newTodoLists = [...todoLists, text];

    flushSync(() => {
      setTodoLists(newTodoLists);

      setText("");
    });

    listRef.current.lastChild.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }

  return (
    <>
      <div className="grid gap-4 p-4 w-40 mx-auto">
        <input
          type="text"
          className="border px-2 py-1 rounded"
          placeholder="Type New Todo"
          value={text}
          onInput={(e) => setText(e.target.value)}
        />
        <button
          onClick={handleAddTodo}
          type="button"
          className="px-4 py-1 border rounded"
        >
          Add Todo
        </button>
        <div ref={listRef} className="h-40 overflow-y-auto">
          {todoLists.map((todo) => (
            <div key={todo}>{todo}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Todo;
