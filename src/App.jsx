import Description from "./components/Description/Description";
import  { useState, useEffect } from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

const App = () => {
  const initialState = { good: 0, neutral: 0, bad: 0 };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : initialState;
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initialState);
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
};

export default App;
