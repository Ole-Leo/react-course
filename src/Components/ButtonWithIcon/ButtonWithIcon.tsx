import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './ButtonWithIcon.css';
import Icon from '../Icon/Icon';

const btnWithIcon = cn('BtnWithIcon');

type ButtonWithIconProps = {
  text: string;
  size: string;
  icon?: string;
};

const ButtonWithIcon: FC<ButtonWithIconProps> = ({ icon, text, size }) => {
  return (
    <button className={btnWithIcon()} style={{ fontSize: `${size}px` }}>
      {icon && <Icon name={icon} size={size} />}
      {text}
    </button>
  );
};

export default ButtonWithIcon;
