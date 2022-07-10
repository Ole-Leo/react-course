import { FC } from 'react';
import { cn } from '@bem-react/classname';
import Button from '../ButtonsCollection/Button';

import './WithTooltip.css';

const tooltip = cn('Tooltip');

type WithTooltipProps = {
  tooltipText: string;
  tooltipMark?: string;
};

const WithTooltip: FC<WithTooltipProps> = ({
  tooltipText,
  tooltipMark = '?',
}) => {
  return (
    <div>
      <Button btnText="button &#8658;" />
      <span className={tooltip()} title={tooltipText}>
        {tooltipMark}
      </span>
    </div>
  );
};

export default WithTooltip;
