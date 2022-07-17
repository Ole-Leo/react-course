import { FC } from 'react';
import { cn } from '@bem-react/classname';
import Button from '../ButtonsCollection/Button';

import './WithTooltip.css';

const cnTooltip = cn('Tooltip');

type WithTooltipProps = {
  btnText: string;
  tooltipText: string;
  tooltipMark?: string;
};

const WithTooltip: FC<WithTooltipProps> = ({
  btnText,
  tooltipText,
  tooltipMark = '?',
}) => {
  return (
    <div>
      <Button btnText={btnText} />
      <span className={cnTooltip()} title={tooltipText}>
        {tooltipMark}
      </span>
    </div>
  );
};

export default WithTooltip;
