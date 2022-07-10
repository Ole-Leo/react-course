import { FC } from 'react';
import { cn } from '@bem-react/classname';
import Icon, { IconProps } from '../Icon/Icon';

import './TextWithIcon.css';

const textWithIcon = cn('TextWithIcon');

type TextWithIconProps = IconProps & {
  text: string;
};

const TextWithIcon: FC<TextWithIconProps> = ({ name, size, text }) => {
  return (
    <div className={textWithIcon()} style={{ fontSize: `${size}px` }}>
      <Icon name={name} size={size} />
      <span>{text}</span>
    </div>
  );
};

export default TextWithIcon;
