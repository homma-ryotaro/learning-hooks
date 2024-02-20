import React, { ReactNode } from "react";
import { TodoInfoType } from "../types";

type PropsType = {
  todoInfo: TodoInfoType;
  children: ReactNode;
};

const TodoItem = (props: PropsType) => {
  const { todoInfo, children } = props;
  return (
    <li className="flex gap-2">
      <p>{todoInfo.title}</p>
      {children}
    </li>
  );
};

export default TodoItem;
