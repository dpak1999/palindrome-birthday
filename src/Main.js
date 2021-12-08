/** @format */

import { useState } from 'react';
import gif from './assets/gif.mp4';
import { checkPalindrome } from './utility';

const Main = () => {
  const [enteredInput, setEnteredInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [flag, setFlag] = useState();
  const [nextPalindromeDate, setNextPalindromeDate] = useState('');
  const [formatDateString, setFormatDateString] = useState('');
  const [daysMissed, setDaysMissed] = useState(0);
  const [format, setFormat] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      checkPalindrome(
        enteredInput,
        setFlag,
        setFormat,
        setDaysMissed,
        setNextPalindromeDate,
        setFormatDateString,
        setLoading
      );
    }, 2500);
  };

  return (
    <>
      <div className="text-center mt-4">
        <form onSubmit={handleOnSubmit}>
          <div>
            <input
              className="border border-purple-500 outline-none w-80 rounded p-2"
              type="date"
              name="userInput"
              id="userInput"
              onChange={(e) => setEnteredInput(e.target.value)}
              required
            />
            <br />
            <button
              type="submit"
              className="text-white border border-lime-400 rounded mt-4 px-5 py-1 hover:bg-lime-500 hover:text-black"
            >
              Check
            </button>
          </div>
        </form>
      </div>
      <div>
        {loading && (
          <video autoPlay loop className="ml-auto mr-auto block mt-4">
            <source src={gif}></source>
          </video>
        )}
        {flag === true && !loading && (
          <div className="text-white text-center mt-4 flex ">
            <div className="border border-purple-500 mx-auto p-3">
              <h1>Kudos !</h1>
              <h2>
                Your birthdate is a <span>palindrome</span> .
              </h2>
              <h3>
                in format : <span>{format}</span> .
              </h3>
            </div>
          </div>
        )}
        {flag === false && !loading && (
          <div className="text-white text-center mt-4 flex ">
            <div className="border border-purple-500 mx-auto p-3">
              <h1>Oh Snap ! </h1>
              <div>
                <h2>
                  Your birthdate is <span>not a palindrome</span> .
                </h2>
              </div>
              <h3>
                Next palindrome date : <span>{nextPalindromeDate}</span> , in
                Format : {formatDateString} .
              </h3>
              <h3>
                You missed it by <span>{daysMissed} </span>
                Day{daysMissed === 1 ? '' : 's'} .
              </h3>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
