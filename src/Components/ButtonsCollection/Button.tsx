import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

const button = cn('Button');

type ButtonProps = {
  btnText: string;
  disabled?: boolean;
  status?: 'active' | 'loading' | 'danger';
};

const Button: FC<ButtonProps> = ({ btnText, status, disabled }) => {
  return (
    <button
      className={button({
        status: status,
      })}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
