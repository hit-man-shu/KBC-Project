import React, { useEffect, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");
  const [userName, setUserName] = useState("");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which element has the chemical symbol 'O'?",
      answers: [
        {
          text: "Oxygen",
          correct: true,
        },
        {
          text: "Gold",
          correct: false,
        },
        {
          text: "Silver",
          correct: false,
        },
        {
          text: "Carbon",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In which year did World War II end?",
      answers: [
        {
          text: "1943",
          correct: false,
        },
        {
          text: "1945",
          correct: true,
        },
        {
          text: "1947",
          correct: false,
        },
        {
          text: "1950",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which country is known as the Land of the Rising Sun?",
      answers: [
        {
          text: "China",
          correct: false,
        },
        {
          text: "Japan",
          correct: true,
        },
        {
          text: "South Korea",
          correct: false,
        },
        {
          text: "Thailand",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the largest mammal in the world?",
      answers: [
        {
          text: "Elephant",
          correct: false,
        },
        {
          text: "Blue Whale",
          correct: true,
        },
        {
          text: "Giraffe",
          correct: false,
        },
        {
          text: "Gorilla",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Which scientist developed the theory of relativity?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
        {
          text: "Albert Einstein",
          correct: true,
        },
        {
          text: "Marie Curie",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the currency of Japan?",
      answers: [
        {
          text: "Yuan",
          correct: false,
        },
        {
          text: "Euro",
          correct: false,
        },
        {
          text: "Yen",
          correct: true,
        },
        {
          text: "Dollar",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Who painted the Mona Lisa?",
      answers: [
        {
          text: "Vincent van Gogh",
          correct: false,
        },
        {
          text: "Leonardo da Vinci",
          correct: true,
        },
        {
          text: "Pablo Picasso",
          correct: false,
        },
        {
          text: "Claude Monet",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "What is the largest planet in our solar system?",
      answers: [
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Jupiter",
          correct: true,
        },
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Saturn",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which famous scientist developed the theory of evolution?",
      answers: [
        {
          text: "Isaac Newton",
          correct: false,
        },
        {
          text: "Charles Darwin",
          correct: true,
        },
        {
          text: "Marie Curie",
          correct: false,
        },
        {
          text: "Galileo Galilei",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "What is the smallest prime number?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "2",
          correct: true,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "5",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "In which year did the Titanic sink?",
      answers: [
        {
          text: "1910",
          correct: false,
        },
        {
          text: "1912",
          correct: true,
        },
        {
          text: "1915",
          correct: false,
        },
        {
          text: "1920",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        {
          text: "Jane Austen",
          correct: false,
        },
        {
          text: "William Shakespeare",
          correct: true,
        },
        {
          text: "Charles Dickens",
          correct: false,
        },
        {
          text: "Mark Twain",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = [
    { id: 1, amount: "₹ 50,000" },
    { id: 2, amount: "₹ 1,00,000" },
    { id: 3, amount: "₹ 2,00,000" },
    { id: 4, amount: "₹ 4,00,000" },
    { id: 5, amount: "₹ 8,00,000" },
    { id: 6, amount: "₹ 16,00,000" },
    { id: 7, amount: "₹ 32,00,000" },
    { id: 8, amount: "₹ 64,00,000" },
    { id: 9, amount: "₹ 1,28,00,000" },
    { id: 10, amount: "₹ 2,56,00,000" },
    { id: 11, amount: "₹ 5,12,00,000" },
    { id: 12, amount: "₹ 1,00,00,000" },
    { id: 13, amount: "₹ 2,00,00,000" },
    { id: 14, amount: "₹ 5,00,00,000" },
    { id: 15, amount: "₹ 7,00,00,000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        moneyPyramid.find((money) => money.id === questionNumber - 1).amount,
      );
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop || questionNumber > data.length ? (
              <>
                <h1 className="endText">
                  <h1>
                    {stop ? userName : `Congratulations, ${userName}!`} You
                    {stop ? " Lost" : " Won"}
                  </h1>
                  <p> You earned: {earned}</p>
                </h1>
              </>
            ) : (
              <>
                <div className="top">
                  <h1 className="topH1">User: {userName}</h1>
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>

          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((ele) => {
                return (
                  <li
                    key={ele.id}
                    className={
                      questionNumber === ele.id
                        ? "moneyListItem active"
                        : "moneyListItem"
                    }
                  >
                    <span className="moneyListItemNumber ">{ele.id}</span>
                    <span className="moneyListItemAmount">{ele.amount}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  );
};

export default App;
