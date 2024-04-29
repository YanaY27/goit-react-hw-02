import s from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total }) => {
  return (
    <div className={s.feedback}>
    
    {total > 0 ? (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
      </div>
    ) : (
      <p>No feedback given yet</p>
    )}
  </div>
  )
}

export default Feedback
