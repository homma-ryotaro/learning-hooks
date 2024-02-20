"use client";
import { TodoInfoType } from "@/app/customhooks/types";
import { useState } from "react";

const useTodo = () => {
  /**
   * Todo管理用のstate
   */
  const [todos, setTodos] = useState<TodoInfoType[]>([]);

  const [inputValue, setInputValue] = useState("");

  const addTodo = (todo: TodoInfoType) => {
    setTodos([...todos, todo]);
    setInputValue("");
  };

  const removeTodo = (id: number) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const getId = () => {
    return todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  };

  return { todos, addTodo, removeTodo, getId, inputValue, setInputValue };
};

export default useTodo;
