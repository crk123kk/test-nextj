import { addTodo, getTodos } from "@/actions";

// serve action
export default async function Page() {
  const todos = await getTodos();
  console.log(todos);
  return (
    <div>
      <form action={addTodo}>
        <input type="text" name="todo" className="border p-2" />
        <button type="submit" className="border p-2 ml-2">
          Add
        </button>
      </form>
      <ul className="leading-8 mt-4">
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
