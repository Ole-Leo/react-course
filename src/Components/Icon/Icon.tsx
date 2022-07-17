import { FC } from 'react';

export type IconProps = {
  name: string;
  size: string;
};

const Icon: FC<IconProps> = ({ name, size }) => {
  return (
    <div>
      <img src={name} alt={name} width={size} />
    </div>
  );
};

export default Icon;
