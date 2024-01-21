import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../sound/correct.mp3";
import wrong from "../sound/src_sounds_wrong.mp3";
import play from "../sound/src_sounds_play.mp3";

const Trivia = ({ data, setStop, questionNumber, setQuestionNumber }) => {
  const [question, setQuestion] = useState(data[questionNumber - 1] || {});
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");

  const [letsPlay] = useSound(play);
  const [ansCorrect] = useSound(correct);
  const [ansWrong] = useSound(wrong);

  useEffect(() => {
    letsPlay();
  }, [letsPlay, question]);

  useEffect(() => {
    const shuffledAnswers = [...data[questionNumber - 1].answers].sort(
      () => Math.random() - 0.5,
    );

    setQuestion({ ...data[questionNumber - 1], answers: shuffledAnswers });
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (ans) => {
    console.log(ans);
    setSelectedAnswer(ans);
    setClassName("answer active");

    delay(3000, () =>
      setClassName((prevClassName) =>
        ans.correct ? "answer correct" : "answer wrong",
      ),
    );

    delay(4000, () => {
      if (ans.correct) {
        ansCorrect();

        delay(4000, () => {
          setQuestionNumber((prevQuestion) => prevQuestion + 1);
          setSelectedAnswer(null);
        });
      } else {
        ansWrong();
        delay(4000, () => {
          setStop(true);
        });
      }
    });
  };

  return (
    <div className="trivia">
      <div className="question">{question.question}</div>
      <div className="answers">
        {question.answers.map((ans) => {
          return (
            <div
              key={ans.id}
              className={selectedAnswer === ans ? className : "answer"}
              onClick={() => handleClick(ans)}
            >
              {ans.text}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Trivia;
