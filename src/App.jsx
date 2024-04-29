import Description from "./components/Description/Description";
import React, {useState} from "react";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from './components/Notification/Notification'



const App = () => {
  const [feedbackTypes, setFeedbackTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const updateFeedback = feedbackType => {
    setFeedbackTypes(prevState => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1
    }));
  };

  const resetFeedback = () => {
    setFeedbackTypes({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };
  const totalFeedback = feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  return (
    <div>
    <Description/>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbackTypes.good}
          neutral={feedbackTypes.neutral}
          bad={feedbackTypes.bad}
          total={totalFeedback}
        />
      ) : (
        <Notification/>
      )}
    </div>
  );
};

export default App;
