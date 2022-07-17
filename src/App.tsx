import { FC } from 'react';
import { cn } from '@bem-react/classname';
import FirstButton from './Components/FirstButton/FirstButton';
import Button from './Components/ButtonsCollection/Button';
import Icon from './Components/Icon/Icon';
import ButtonWithIcon from './Components/ButtonWithIcon/ButtonWithIcon';
import TextWithIcon from './Components/TextWithIcon/TextWithIcon';
import WithTooltip from './Components/WithTooltip/WithTooltip';

import fox from './Components/Icon/assets/fox.svg';
import shibainu from './Components/Icon/assets/shibainu.svg';
import fuji from './Components/Icon/assets/fuji.svg';
import cherryTree from './Components/Icon/assets/cherryTree.svg';

import './App.css';

const cnApp = cn('App');
const description = cn('Description');

const App: FC = () => {
  return (
    <div className={cnApp()}>
      <FirstButton btnText="button" />
      <div className={cnApp('btn')}>
        <Button btnText="button" />
        <Button btnText="button" status="active" />
        <Button btnText="button" disabled={true} />
        <Button btnText="button" status="loading" />
        <Button btnText="% sale %" status="danger" />
        <h2 className={description()}>Normal</h2>
        <h2 className={description()}>Active</h2>
        <h2 className={description()}>Disabled</h2>
        <h2 className={description()}>Loading</h2>
        <h2 className={description()}>Danger</h2>
      </div>
      <div className={cnApp('icon')}>
        <Icon name={shibainu} size="86" />
        <Icon name={fuji} size="86" />
        <Icon name={fox} size="86" />
      </div>
      <div>
        <ButtonWithIcon text="button" icon={fox} size="24" />
      </div>
      <div>
        <TextWithIcon name={cherryTree} size="36" text="Cherry tree" />
      </div>
      <div>
        <WithTooltip btnText="button &#8658;" tooltipText="Tooltip" />
      </div>
    </div>
  );
};

export default App;
