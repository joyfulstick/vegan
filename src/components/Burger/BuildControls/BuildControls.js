import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Beetroot', type: 'beetRoot' },
  { label: 'Tofu', type: 'tofu' },
  { label: 'Falafel', type: 'falafel' }

];

const buildControls = () => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);

export default buildControls;