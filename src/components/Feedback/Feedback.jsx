import s from './Feedback.module.css'

const Feedback = ({ good, neutral, bad, total }) => {
  const showFeedback = total > 0;

  return (
    <div className={s.feedback}>
      {showFeedback && (
        <div>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          
        </div>
      )}
      {!showFeedback && <p>No feedback given yet</p>}
    </div>
  );
};


export default Feedback
