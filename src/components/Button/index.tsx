import { FC } from 'react';

type ButtonProps = {
  title: string;
  type: string;
};

const Button: FC<ButtonProps> = ({ title, type }) => {
  return <button className={`${type}`}>{title}</button>;
};

export default Button;
