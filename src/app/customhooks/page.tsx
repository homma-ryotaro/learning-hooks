"use client";
import React, { useRef } from "react";
import useTodo from "@/hooks/useTodo";
import TodoList from "./_components/TodoList";
import TodoItem from "./_components/TodoItem";
import DeleteButton from "@/components/DeleteButton";

/**
 * Todo画面
 * @returns
 */
const Page = () => {
  const { todos, addTodo, removeTodo, getId, inputValue, setInputValue } =
    useTodo();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>CustomHooks</h1>
      <h2>Todo</h2>
      <input
        type="text"
        onChange={changeHandler}
        className="text-black"
        value={inputValue}
      />
      <button
        type="button"
        onClick={() => {
          addTodo({ id: getId(), title: inputValue });
        }}
      >
        追加
      </button>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todoInfo={todo}>
            <DeleteButton onClick={() => removeTodo(todo.id)} />
          </TodoItem>
        ))}
      </TodoList>
    </div>
  );
};

export default Page;
