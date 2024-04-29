import s from './Options.module.css'
import clsx from 'clsx'

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
    
  return (
    <div className={s.options}>
       <button className={clsx(s.button, s.good)} onClick={() => updateFeedback('good')}>Good</button>
      <button className={clsx(s.button, s.neutral)} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={clsx(s.button, s.bad)} onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && <button className={clsx(s.button, s.reset)} onClick={resetFeedback}>Reset</button>}
    </div>
  )
}

export default Options
