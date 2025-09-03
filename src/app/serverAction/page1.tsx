"use client";
import { useEffect, useState } from "react";

// 传统方式
export default function Page() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch("/api/todos")).json();
      setTodos(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const { data } = await res.json();
    setTodos(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
