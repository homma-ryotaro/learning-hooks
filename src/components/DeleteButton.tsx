import React, { FC } from "react";
type Props = JSX.IntrinsicElements["button"];

const DeleteButton: FC<Props> = ({ ...props }) => {
  return (
    <button type="button" {...props}>
      削除
    </button>
  );
};

export default DeleteButton;
