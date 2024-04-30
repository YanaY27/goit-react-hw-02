import s from './Statistics.module.css'

  const Statistics = ({ totalFeedback, positiveFeedback }) => {
    return (
        <div className={s.statistics}>
        <p>Total feedback: {totalFeedback}</p>
        <p>Positive feedback: {positiveFeedback}%</p>
      </div>
    )
  }
  
  export default Statistics
  