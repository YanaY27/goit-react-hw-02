import s from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.feedback}>
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>TotalFeedback: {totalFeedback}</p>
        <p>Positive: {positiveFeedback}%</p>
      </div>
    </div>
  );
};

export default Feedback;
