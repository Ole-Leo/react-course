import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './FirstButton.css';

const cnFirstButton = cn('FirstButton');

type FirstButtonProps = {
  btnText: string;
};

const FirstButton: FC<FirstButtonProps> = ({ btnText }) => {
  return <button className={cnFirstButton()}>{btnText}</button>;
};

export default FirstButton;
