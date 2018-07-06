import BuildControl from './BuildControl/BuildControl'
import React from 'react'
import classes from './BuildControls.css'

const controls = [
  { label: 'Falafel', type: 'falafel' },
  { label: 'Tofu', type: 'tofu' },
  { label: 'Beetroot', type: 'beetroot' },
  { label: 'Salad', type: 'salad' },
]

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemove(ctrl.type)}
        disabled={props.displayed[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}
    </button>
  </div>
)

export default buildControls
