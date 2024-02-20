import React, { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

/**
 * Todo表示用コンポーネント
 * @param props
 * @returns
 */
const TodoList = (props: PropsType) => {
  return <ul>{props.children}</ul>;
};

export default TodoList;
