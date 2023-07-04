import { FC } from "react";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className="bg-blue-400 w-[90px] py-1 px-1 rounded-md flex items-center justify-center">
      {props.children}
    </button>
  );
};

export default Button;