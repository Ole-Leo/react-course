import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './Button.css';

const cnButton = cn('Button');

type ButtonProps = {
  btnText: string;
  disabled?: boolean;
  status?: 'active' | 'loading' | 'danger';
};

const Button: FC<ButtonProps> = ({ btnText, status, disabled }) => {
  return (
    <button
      className={cnButton({
        status: status,
      })}
      disabled={disabled}
    >
      {btnText}
    </button>
  );
};

export default Button;
